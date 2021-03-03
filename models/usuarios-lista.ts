import { Usuario } from "./usuario"

export class UsuariosLista {

    private lista: Usuario[] = [];

    constructor() { 
    }

    // Agregar usuario
    public agregar (usuario: Usuario) {
        this.lista.push(usuario);
        console.log(this.lista);
        return usuario;
    }

    //Actualizar nombrede usuario
    public actualizarNombre ( id: string, nombre: string ) {
        // Recorro lista usuarios
        for (let usuarios of this.lista) {
            // Actualiza nombre usuario cuando encuentre id
            if (usuarios.id === id) {
                usuarios.nombre = nombre;
                break;
            }
        }
        console.log('-----ACTUALIZANDO USUARIO-------');
        console.log(this.lista);
    }

    // Obtener lista de usuarios
    public getLista() {
        return this.lista;
    }

    // Obtener usuario
    public getUsuario (id: string) {

        // Lista.find retorna primer valor donde hace match
        return this.lista.find( usuario => usuario.id === id );
    }

    // Obtener usuarios de una sala
    public getUsuarioSala ( sala: string ) {

        // Lista.filter retorna todos los valores que cumplan la condicion
        return this.lista.filter( usuario => usuario.sala === sala);
    }

    // Eliminar usuario
    public eliminarUsuario (id: string) {

        //Creo usuario temporal con la informacion del usuario eliminado
        const tempUsuario = this.getUsuario(id);

        // Filtra lista eliminando usuario seleccionado
        this.lista = this.lista.filter( usuario => usuario.id !== id );

        return tempUsuario;
    }
}