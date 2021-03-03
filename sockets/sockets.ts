import { Socket, Server } from "socket.io";
import { Usuario } from "../models/usuario";
import { UsuariosLista } from "../models/usuarios-lista";

export const usuariosConectados  = new UsuariosLista();

// Registra nuevo usuario y lo agrega a lista de usuarios activos
export const conectarCliente = ( cliente: Socket ) => {

    // Creo nuevo usuario al recibir conexion
    const usuario = new Usuario( cliente.id );

    // Agrego usuario a lista de usuarios
    usuariosConectados.agregar( usuario );
}

// Configurar usuario
export const configurarUsuario = ( cliente: Socket ) => {
    cliente.on("configurar-usuario", ( payload: { nombre: string}, callback: Function )  => {
        
        usuariosConectados.actualizarNombre( cliente.id, payload.nombre);

        callback({
            ok: true,
            mensaje: `Usuario ${payload.nombre}, configurado`
        });
    });
}

// Desconexion de cliente del servidor
export const desconectar = (cliente: Socket) => {
    cliente.on('disconnect', () => {
        console.log('cliente desconectado');

        // Elimina usuario de lista de usuarios conectados
        usuariosConectados.eliminarUsuario( cliente.id );
    });
}

// Escuchar mensajes
export const mensaje = ( cliente: Socket, io: Server ) => {
    cliente.on("mensaje", ( payload ) => {
        console.log('Mensaje recibido ', payload);
        io.emit('mensaje-nuevo',payload);
    });
}
