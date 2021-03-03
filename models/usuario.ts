export class Usuario {

    public id: string; // Este sera el id del socket que se conecta a la aplicacion
    public nombre: string; // Se inicializa vacio ya que al iniciar conexion aun no se tiene el identificador del usuario
    public  sala: string; // Se inicializa vacio ya que aun no se conoce la sala en la que va a estar el usuario

    constructor (id: string ) {
        this.id = id;
        this.nombre = '';
        this.sala = '';
    }
}