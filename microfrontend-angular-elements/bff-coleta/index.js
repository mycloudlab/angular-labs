import express from 'express';
import bodyParser from 'body-parser';

import axios from 'axios';

import { makeRouteCollectionInsert, makeRouteCollectionQuery, makeRouteEntityOperation } from './utils.js'
let app = express();

app.use(bodyParser.json());

const baseDiscentesUrl = 'http://localhost:3000/discentes';
const baseBolsasUrl = 'http://localhost:3001/bolsas';
const baseProducoesUrl = 'http://localhost:3002/producoes';

makeRouteCollectionQuery(app, { route: '/coleta/discentes', baseUrl: baseDiscentesUrl });

makeRouteCollectionInsert(app, { route: '/coleta/discentes', baseUrl: baseDiscentesUrl });

makeRouteEntityOperation(app, { operation: 'get', route: '/coleta/discentes/:id', baseUrl: baseDiscentesUrl });
makeRouteEntityOperation(app, { operation: 'put', route: '/coleta/discentes/:id', baseUrl: baseDiscentesUrl });
makeRouteEntityOperation(app, { operation: 'delete', route: '/coleta/discentes/:id', baseUrl: baseDiscentesUrl });

/* recupera detalhes do discente buscando bolsas, producoes e dados do discente */
app.get('/coleta/discentes/:id/detalhes', async (req, res) => {
    try {

        let [
            discentesResponse,
            bolsasResponse,
            producoesResponse
        ] = await Promise.all([
            axios.get(`${baseDiscentesUrl}/${req.params.id}`),
            axios.get(`${baseBolsasUrl}?where={ "discente": { "$eq": "${req.params.id}" } }`),
            axios.get(`${baseProducoesUrl}?where={ "discente": { "$eq": "${req.params.id}" } }`)
        ]);

        res.send({
            discente: discentesResponse.data,
            bolsas: bolsasResponse.data,
            producoes: producoesResponse.data
        });

    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});


app.listen(5000, () => console.log(`bff coleta started on port 5000!`));
