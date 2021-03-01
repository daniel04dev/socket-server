import { Socket, Server } from "socket.io";

// Desconexion de cliente del servidor
export const desconectar = (cliente: Socket) => {
    cliente.on('disconnect', () => {
        console.log('cliente desconectado');
    });
}

// Escuchar mensajes
export const mensaje = ( cliente: Socket, io: Server ) => {
    cliente.on("mensaje", ( payload) => {
        console.log('Mensaje recibido ', payload);
        io.emit('mensaje-nuevo',payload);
    });
}