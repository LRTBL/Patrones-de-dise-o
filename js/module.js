// MODULE PATTERN
//SIMULA EL TIPO DE ACCESO DE LAS VARIABLES, FUNCIONES EN
// PRIVATE O PUBLIC

const comprarBoleto = (function() {
  // PRIVADO
  let evento = "Conferencia de JS";
  //   PUBLICO
  return {
    mostrarBoleto: function() {
      console.log(evento);
    }
  };
})();

comprarBoleto.mostrarBoleto();
