import axios from 'axios';

export async function makeRouteCollectionQuery(app,options = { route: '', baseUrl: '' }) {
    app.get(options.route, async (req, res) => {
        try {
            if (!req.query.where) req.query.where = "";

            let response = await axios.get(`${options.baseUrl}?where=${req.query.where}`);
            res.send(response.data);
        } catch (err) {
            console.log(err);
            res.sendStatus(500);
        }
    });
}

export async function makeRouteCollectionInsert(app,options = { route: '', baseUrl: '' }) {
    app.post(options.route, async (req, res) => {
        try {
            let response = await axios.post(options.baseUrl, req.body)
            res.send(response.data);
        } catch (err) {
            console.log(err);
            res.sendStatus(500);
        }
    });
}

export async function makeRouteEntityOperation(app,options = { operation: 'get', route: '', baseUrl: '' }) {
    app[options.operation](options.route, async (req, res) => {
        try {
            let response = await axios[options.operation](`${options.baseUrl}/${req.params.id}`)
            res.send(response.data);
        } catch (err) {
            if (err.response.status == 404) {
                res.sendStatus(404);
                return;
            }
            console.log(err);
            res.sendStatus(500);
        }
    });
}