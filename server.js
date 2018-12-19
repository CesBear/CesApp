import express from 'express';
import config from "./config";
const server = express();


server.get('/', (req, res) => {

});


server.listen(config.port, () => {
    console.info('Express listening on port', config.port);
});