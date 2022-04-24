/**
 * Para poder insertar los elementos requiero tener el contenedor
 */

const container = document.querySelector(".container");
console.log(container)

for (let index = 3; index < 7; index++) {
  //Se crea el elemento
  let item = document.createElement('div');
  //Se le agregan las clases
  item.classList.add("item")
  //Se agrega el texto
  item.textContent = index;
  //Se agrega el elemento
  container.appendChild(item);
}

//Agregar a todos los items la clase error

let items = document.querySelectorAll(".item");
console.log(items)
for (const item of items) {
  item.classList.add('error');
}

//Se agrega el valor al circulo
document.querySelector('.circle').innerHTML = "2";

//Se elimina el parrafo
const parrafo =  document.querySelector("main>p");
parrafo.parentNode.removeChild(parrafo);