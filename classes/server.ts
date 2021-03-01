import express from 'express';
import { SERVER_PORT } from '../globals/environments';
import http from 'http';

import { createServer } from "http";
import { Server as ServerIO, Socket } from "socket.io";

// import del archivo sockets.ts con toda la logica de el socket
import * as socket from '../sockets/sockets';



//Con default cuando la importo en otra clase importa directamente la clase 
export default class Server {

    private static _instance: Server;

    public app: express.Application;
    public port: number;

    private httpServer: http.Server;
    private io: ServerIO;

    //Configuracion de conexion de sockets
    private constructor() {
        this.app = express();
        this.port = SERVER_PORT;

        this.httpServer = createServer(this.app);
        this.io = new ServerIO(this.httpServer, {
            allowEIO3: true,
            cors: {
            origin: "http://localhost:4200",
            methods: ["GET", "POST"],
            allowedHeaders: ["my-custom-header"],
            credentials: true
            }
        });  
        
        this.escucharSockets();

    }

    //Creo metodo que devuelve instancia de la clase o la crea la primera vez que se llama (Patron Singleton)
    public static get instance() {
        return this._instance ||  ( this._instance = new this());
    }

    private escucharSockets() {
        console.log('Escuchando conexiones -- sockets');
        this.io.on('connection', (cliente) => {
            console.log('cliente conectado');

            // Notificacion de desconexion de un cliente
            socket.desconectar(cliente);

            //Escuchar mensaje
            socket.mensaje(cliente, this.io);
        });

    }

    start( callback: Function ) {
        this.httpServer.listen(this.port,callback()); 
    }
}