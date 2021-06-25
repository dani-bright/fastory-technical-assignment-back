const Hapi = require('@hapi/hapi');
const nodeFetch = require('node-fetch');

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

    // server.route({
    //     method : 'GET',
    //     path : '/people',
    //     config,
    //     handler : async (req, res) => {
    //         try {
    //             const response = await nodeFetch(`https://swapi.dev/api/people`);
    //             const data = response.json()
    //             return data.results;
    //         } catch (e) {
    //             console.log(e);
    //         }
    //     }
    // });
    // No async/await support for Hapi ??

    server.route({
        method : 'GET',
        path : '/people',
        config,
        handler : (req, res) => {
            return nodeFetch(`https://swapi.dev/api/people`)
                .then(response => response.json())
                .then(data => {
                    return data.results;
                })
                .catch(err => res.status(404).json({
                    'message' : err.message
                }));
        }
    });

    server.route({
        method : 'GET',
        path : '/film',
        config,
        handler : (req, res) => {
            return nodeFetch(`https://swapi.dev/api/films`)
                .then(response => response.json())
                .then(data => {
                    return data.results;
                })
                .catch(err => res.status(404).json({
                    'message' : err.message
                }));
        }
    });

    server.route({
        method : 'GET',
        path : '/planet',
        config,
        handler : (req, res) => {
            return nodeFetch(`https://swapi.dev/api/planets`)
                .then(response => response.json())
                .then(data => {
                    return data.results;
                })
                .catch(err => res.status(404).json({
                    'message' : err.message
                }));
        }
    });

    server.route({
        method : 'GET',
        path : '/specie',
        config,
        handler : (req, res) => {
            return nodeFetch(`https://swapi.dev/api/species`)
                .then(response => response.json())
                .then(data => {
                    return data.results;
                })
                .catch(err => res.status(404).json({
                    'message' : err.message
                }));
        }
    });

    server.route({
        method : 'GET',
        path : '/starship',
        config,
        handler : (req, res) => {
            return nodeFetch('https://swapi.dev/api/starships')
                .then(response => response.json())
                .then(data => {
                    return data.results;
                })
                .catch(err => res.status(404).json({
                    'message' : err.message
                }));
        }
    });

    server.route({
        method : 'GET',
        path : '/vehicle',
        config,
        handler : (req, res) => {
            return nodeFetch(`https://swapi.dev/api/vehicles`)
                .then(response => response.json())
                .then(data => {
                    return data.results;
                })
                .catch(err => res.status(404).json({
                    'message' : err.message
                }));
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