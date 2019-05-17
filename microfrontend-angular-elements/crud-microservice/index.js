import * as pkg from './package.json';
import express from 'express';
import loki from 'lokijs';
import shortid from 'shortid';
import bodyParser from 'body-parser';
import program from 'commander';

program
    .version(pkg.version)
    .option('-s, --sys <sys>', 'nome do crud microservice')
    .option('-e, --entity <entity>', 'nome da entidade')
    .option('-p, --port <port>', 'porta usada', parseInt)
    .option('-d, --db <db>', 'nome do banco');

program.parse(process.argv);

if (program.sys == undefined || program.entity == undefined || program.port == undefined || program.db == undefined)
    program.help();


let app = express();

let db = new loki(program.db, {
    autoload: true,
    autoloadCallback: init,
    autosave: true,
    autosaveInterval: 1000
});


function init() {
    let base = program.entity;

    let collection = db.getCollection(base);
    if (collection == null)
        collection = db.addCollection(base);

    app.use(bodyParser.json());

    app.get(`/${base}`, (req, res) => {

        let filter = {};
        if (req.query.where) {
            filter = JSON.parse(req.query.where)
        }
        res.send(collection.find(filter));

    });

    app.get(`/${base}/:id`, (req, res) => {
        let list = collection.find({ id: { '$eq': req.params.id } });
        if (list.length == 0) res.sendStatus(404);
        else res.send(list[0]);
    });

    app.post(`/${base}`, (req, res) => {
        let entity = req.body;
        entity.id = shortid.generate();
        collection.insert(entity);
        res.send(entity);
    });

    app.put(`/${base}/:id`, (req, res) => {
        let data = req.body;
        let entity = collection.find({ id: { '$eq': req.params.id } })[0];
        if (!entity) {
            res.sendStatus(404);
            return;
        }

        entity = Object.assign(entity, data);
        collection.update(entity);
        res.send(entity);
    });

    app.delete(`/${base}/:id`, (req, res) => {
        let list = collection.find({ id: { '$eq': req.params.id } });
        collection.remove(list[0]);
        res.sendStatus(200);
    });


    app.listen(program.port, () => console.log(`CRUD Microservice ${program.sys} started on port ${program.port}!`));
}
