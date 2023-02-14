//SE puede requerir el modulo greet, pero este ambito es privado
//require("./greet");

//Para invocarla hay que exportarla desde su origen para despues llamarla
let greet = require("./greet");

let obj = {};

let persona = {
  nombre: "Jorge",
  apellido: "Delgado",
  getName: function () {
    return `${this.nombre} ${this.apellido}`;
  },
  domicilio: {
    calle: "Madero #144",
    colonia: "Centro",
    cp: 28000,
    municipio: "Colima",
    getStreet: function () {
      return `Calle: ${this.calle} Colonia: ${this.colonia} CP: ${this.cp},${this.municipio}`;
    },
  },
};
console.log(persona);
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.getName());
console.log(persona.domicilio.calle);
console.log(persona.domicilio.getStreet());
