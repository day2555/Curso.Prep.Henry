// No cambies los nombres de las funciones.

function crearUsuario() {
  // Crea una Clase de ES6 o una función constructor llamada "Usuario"
  // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
  // En el `contructor`, define el usuario, el nombre, el email y la contraseña
  // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
  // {{nombre}} debe ser el nombre definido en cada instancia
  // Devuelve la clase
  // Tu código:
  class Usuario {
    constructor(opciones){
      this.usuario = opciones.usuario,
      this.nombre = opciones.nombre,
      this.email = opciones.email,
      this.password = opciones.password 
    }
    saludar(nombre) {
      return "Hola, mi nombre es " + this.nombre;  
    }
  }
  return Usuario; 
}
/* Forma de hacerlo con function constructor: 
function Usuario(opciones) {
    this.usuario = opciones.usuario;
    this.nombre = opciones.nombre;
    this.email = opciones.email;
    this.password = opciones.password;
  }

  Usuario.prototype.saludar = function() {
    return 'Hola, mi nombre es ' + this.nombre;
  };

  return Usuario;

  // this.saludar = function(){
    return 'Hola, mi nombre es ' + this.nombre;
  } También así se puede agregar el método desde la función constructora. 
*/

function agregarMetodoPrototype(Constructor) {
  // Agrega un método al Constructor del `prototype`
  // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
  // Tu código:
  Constructor.prototype.saludar = function(){
    return "Hello World!"
  };
}

function agregarStringInvertida() {
  // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
  // El método debe llamarse "reverse"
  // Ej: 'menem'.reverse() => menem
  // 'toni'.reverse() => 'inot'
  // Pista: Necesitarás usar "this" dentro de "reverse"
  String.prototype.reverse = function(){
    var str = ""; //Arranaca como un string vacío, va a ir guardando los caracteres de la cadena que llamó el método reverse. 
    //Debemos usar un bucle para iterar ( realizar una acción por cada caracter).
    // h o l a --> a l o h; necesito acceder primero al ultimo caracter, luego al penúltimo, etc. Bucle que recorra de fin a principio.
    // Inicialización: for inicia con la length-1 para empezar desde el último caracter. 
    // Condición: Finaliza en i mayor o igual porque 0 también hay que recorrerlo ya que es la primer posición.
    // Actualización: i-- decrementa la variable en uno cada vez que el for se ejecuta.
    for(var i = this.length - 1; i >= 0; i--){ 
      str += this[i]; // Accedo al caracter que tenga en esa posición.
    }
    return str; 
  };
  //str = str + this.charAt(i); // al método charAt le paso la posición. this.charAt(i) pregunta a esta instancia de string qué caracter tiene en está posición.
 //En la string vacía voy a guardar lo que ya tenía += ("")( porque no lo quiero pisar, sino se reasignaría =).
}

// ---------------------------------------------------------------------------//
  //Crea el constructor de la clase "Persona"
  //Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
  //Debe tener un método llamado "detalle" que nos devuelve un objeto con las propiedades de la persona y sus valores.
  //Ej: { 
    //   Nombre: 'Juan',
    //   Apellido: 'Perez',
    //   Edad: 22,
    //   Domicilio: 'Saavedra 123'
    //  }

  class Persona {
    constructor(nombre, apellido, edad, domicilio) {
      // Crea el constructor:
      this.nombre = nombre,
      this.apellido = apellido, 
      this.edad = edad,
      this.domicilio = domicilio  
    }
    detalle(){
      return{
        Nombre: this.nombre,
        Apellido: this.apellido,
        Edad: this.edad,
        Domicilio: this.domicilio
      }
    }    
}
/* El método también podría agregarse así como una propiedad más: 
this.detalle = function() {
        return { 
          Nombre: this.nombre,
          Apellido: this.apellido,
          Edad: this.edad,
          Domicilio: this.domicilio
        }
      }
*/

function crearInstanciaPersona(nombre, apellido, edad, dir) {
  //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
  //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
  //Devolver la nueva persona creada

  var persona1 = new Persona("Juan", "Perez", 22, "Saavedra 123"); 
  return persona1; 
}
  
function agregarMetodo() {
  //La función agrega un método "datos" a la clase Persona que toma el nombre y la edad de la persona y devuelve: 
  //Ej: "Juan, 22 años"
  Persona.prototype.datos = function(){
    return this.nombre + ", " + this.edad + " años";
  }
}
  

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida,
  crearInstanciaPersona,
  agregarMetodo, 
  Persona
};
