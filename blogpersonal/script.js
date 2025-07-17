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