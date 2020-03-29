// PATRON DE DISEÑO DE CREACCION
// SE CREA UNA CLASE EN AL QUE TENGA UN METODO FACTORY
// Y SE ELIGE LA INSTANCIA DE CADA OBJETO SEGUN SEA CONVENIENTE

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

class SedePrincipal {
  instancia = null;
  cont = 0;
  constructor() {}

  createInstance() {
    if (this.instancia === null) {
      this.instancia = new SedePrincipal();
    }
  }
  getIntance() {
    if (this.instancia === null) {
      this.createInstance();
    }
    return this.instancia;
  }
  getCont() {
    return this.cont;
  }
  setCont(a) {
    this.cont += a;
  }
}

let a = new SedePrincipal();
