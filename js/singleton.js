// PATRON DE DISEÑO DE CREACCION
// SOLO SE PUEDE INTANCIAR UNA VEZ LA CLASE, VERIFICANDO LA EXITENCIA
//  SI YA SE HIZO DEVUELVE LA MISMA INSTANCIA, SINO CREA OTRA

/////////////////
//OBJET LITERAL//
/////////////////

// const alumnos = {
//   listaAlumnos: [],

//   get: function(id) {
//     console.log(id);
//   },
//   crear: function(datos) {
//     this.listaAlumnos.push(datos);
//     return datos;
//   },
//   listado: function() {
//     return this.listaAlumnos;
//   }
// };

// const infoAlumno = {
//   nombre: "JUAN",
//   edad: 20
// };

// const infoAlumno2 = {
//   nombre: "Pablo",
//   edad: 21
// };

// alumnos.crear(infoAlumno);
// alumnos.crear(infoAlumno2);

/////////////////
///CLASES ES6////
/////////////////

class SedePrincipal {
  constructor() {
    this.num_limonada = 0;
    this.num_cola = 0;

    if (typeof SedePrincipal.instance === "object") {
      return SedePrincipal.instance;
    }
    SedePrincipal.instance = this;
    return this;
  }

  getNumLimonada() {
    return this.num_limonada;
  }
  getNumCola() {
    return this.num_cola;
  }
  setNumCola(a) {
    this.num_cola += a;
  }
  setNumLimonada(a) {
    this.num_limonada += a;
  }
}

let sede1 = new SedePrincipal();
let sede2 = new SedePrincipal();
let sede3 = new SedePrincipal();

sede1.setNumLimonada(15);
console.log("PRIMERA FABRICA");
console.log(sede1.getNumCola());
console.log(sede1.getNumLimonada());

sede2.setNumCola(10);
console.log("SEGUNDA FABRICA");
console.log(sede2.getNumCola());
console.log(sede2.getNumLimonada());

sede3.setNumLimonada(5);
console.log("TERCER FABRICA");
console.log(sede3.getNumCola());
console.log(sede3.getNumLimonada());
