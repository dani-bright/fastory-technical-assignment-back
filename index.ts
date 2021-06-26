import { getAll } from './src/helper/utils';

const Hapi = require('@hapi/hapi');
import nodeFetch from 'node-fetch';

const config = {
    cors : {
        origin : ['http://localhost:3000'],
        additionalHeaders : ['cache-control', 'x-requested-with']
    },
};
const init = async () => {

    const server = Hapi.server({
        port : 3001,
        host : 'localhost'
    });

    // no access to ids in the data returned by the api :/
    // there is no pictures in the data...

    server.route({
        method : 'GET',
        path : '/people',
        config,
        handler : async (req, res) => {
            try {
                return await getAll('https://swapi.dev/api/people');
            } catch (e) {
                console.log(e);
                throw new Error(e);
            }
        }
    });

    server.route({
        method : 'GET',
        path : '/film',
        config,
        handler : async (req, res) => {
            try {
                return await getAll('https://swapi.dev/api/films');
            } catch (e) {
                console.log(e);
                throw new Error(e);
            }
        }
    });

    server.route({
        method : 'GET',
        path : '/planet',
        config,
        handler : async (req, res) => {
            try {
                return await getAll('https://swapi.dev/api/planets');
            } catch (e) {
                console.log(e);
                throw new Error(e);
            }
        }
    });

    server.route({
        method : 'GET',
        path : '/specie',
        config,
        handler : async (req, res) => {
            try {
                return await getAll('https://swapi.dev/api/species');
            } catch (e) {
                console.log(e);
                throw new Error(e);
            }
        }
    });

    server.route({
        method : 'GET',
        path : '/starship',
        config,
        handler : async (req, res) => {
            try {
                return await getAll('https://swapi.dev/api/starships');
            } catch (e) {
                console.log(e);
                throw new Error(e);
            }
        }
    });

    server.route({
        method : 'GET',
        path : '/vehicle',
        config,
        handler : async (req, res) => {
            try {
                return await getAll('https://swapi.dev/api/vehicles');
            } catch (e) {
                console.log(e);
                throw new Error(e);
            }
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();