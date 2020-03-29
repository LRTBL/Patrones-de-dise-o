// MODULE PATTERN

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
