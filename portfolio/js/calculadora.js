let pantalla = document.getElementById('pantalla');

function agregar(valor) {
  pantalla.value += valor;
}

function borrar() {
  pantalla.value = '';
}

function borrarUno() {
  pantalla.value = pantalla.value.slice(0, -1);
}

function calcular() {
  try {
    pantalla.value = eval(pantalla.value);
  } catch {
    pantalla.value = 'Error';
  }
}
