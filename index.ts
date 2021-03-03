import bodyParser from 'body-parser';
import Server from './models/server';
import { SERVER_PORT } from './globals/environments';
import { router } from './routes/router';
import cors from 'cors';

const server = Server.instance;
//Body Paser
server.app.use(bodyParser.urlencoded({ extended: true }));
server.app.use(bodyParser.json() );

//CORS configuration
server.app.use( cors({ origin: true, credentials: true }) );

//Router Services
server.app.use('/', router );

//Inicia Servidor
server.start( ()=> {
    console.log(`Servidor corriendo en puerto ${SERVER_PORT}`);
});