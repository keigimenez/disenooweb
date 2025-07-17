const boton = document.getElementById("btnVolver");

window.onscroll = function() {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    boton.style.display = "block";
  } else {
    boton.style.display = "none";
  }
};

function volverAlInicio() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

const trivia = [
    {
      pregunta: "¿CÚAL ES LA PRIMERA PELICULA DIRIGIDA POR BURTON?",
      opciones: ["Ed Wood", "Nueve", "La gran aventura de Pee-Wee", "Batman"],
      respuesta: "La gran aventura de Pee-Wee",
      imagen: "imageness/timburton.jpg"
    },
    {
      pregunta: "¿CÚAL PELÍCULA NO PARTICIPO JOHNNY DEPP?",
      opciones: ["Miss Peregrine", "Joven Manos De Tijeras", "Sweeney Todd", "Sombras Tenebrosas"],
      respuesta: "Miss Peregrine",
      imagen: "imageness/johnny.jpg"
    },
    {
      pregunta: "¿EN QUÉ PELÍCULA SALE ESTE PERSONAJE?",
      opciones: ["El Cadaver De La Novia", "Frankenweenie", "El extraño mundo de Jack", "Ojos Grandes"],
      respuesta: "Frankenweenie",
      imagen: "imageness/frankenweenie.jpg"
    },
    {
      pregunta: "¿QUÉ PELÍCULA RECAUDO MÁS DINERO?",
      opciones: ["Batman Returns", "Beetlejuice", "Charlie y la fábrica de chocolate", "Alicia en el país de las maravillas"],
      respuesta: "Alicia en el país de las maravillas",
      imagen: "imageness/tim.jpg"
    }
  ];
  
  let index = 0;
  let puntaje = 0;
  
  function mostrarPregunta() {
    const q = trivia[index];
    const contenedor = document.getElementById("trivia");
    contenedor.innerHTML = `
      <div class="question">
        <img src="${q.imagen}" alt="Imagen de la pregunta">
        <p>${q.pregunta}</p>
        ${q.opciones.map(op => `<button onclick="verificarRespuesta('${op}')">${op}</button>`).join("")}
      </div>
    `;
  }
  
  function verificarRespuesta(seleccion) {
    if (seleccion === trivia[index].respuesta) puntaje++;
    index++;
    if (index < trivia.length) {
      mostrarPregunta();
    } else {
      document.getElementById("trivia").innerHTML = "";
      document.getElementById("result").innerHTML = `
        <p>¡Trivia completada! Tu puntaje es ${puntaje} de ${trivia.length}</p>
        <img src="imageness/burtoncelebracion.gif" alt="GIF de resultado final">
      `;
    }
  }
  
  mostrarPregunta();
  