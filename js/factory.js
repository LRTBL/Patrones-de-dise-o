// PATRON DE DISEÑO DE CREACCION
// SE CREA UNA CLASE EN AL QUE TENGA UN METODO FACTORY
// Y SE ELIGE LA INSTANCIA DE CADA OBJETO SEGUN SEA CONVENIENTE

function ConstructorSitios() {
  this.crearElemento = function(texto, tipo) {
    let html;
    if (tipo == "input") {
      html = new InputHTML(texto);
    } else if (tipo === "img") {
      html = new ImagenHTML(texto);
    } else if (tipo === "h1") {
      html = new HeadingHTML(texto);
    } else if (tipo === "p") {
      html = new ParrafoHTML(texto);
    }
    return html;
  };
}

class InputHTML {
  constructor(text) {
    this.text = text;
  }
}

// ...

const sitioWeb = new ConstructorSitios();
console.log(sitioWeb.crearElemento("hola", "input"));
