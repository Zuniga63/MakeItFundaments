/**
 * Se puede acceder el valor del titlo del coumento por
 * medio de la propiedad title del document;
 * @type {string}
 */
const originalTitle = document.title;

/**
 * Con el metodo querySelector se puede acceder a un elementos del DOM
 * utilizando un selector de css valido. y retorna el primer elemento
 * que coincide o nul.
 * la propiedad innerHTML permite agregar un nodo de html dentro del elemento
 * en este caso se crea un elemento de texto plano.
 */
document.querySelector("#titleValue").innerHTML = originalTitle;

/**
 * Metodo encargado de cambiar el titulo y de actualizar la vista.
 */
const changeTitle = () => {
  let actualTitleValue = document.title;
  /**
   * Con este metodo puedo recuperar un elemento del DOM utilizando el
   * ID del elemento.
   */
  const titleValue = document.getElementById("titleValue");

  if (actualTitleValue !== originalTitle) {
    document.title = originalTitle;
    //Por medio de la porpiedad innerText puedo cambiar el texto dentro del elemento.
    titleValue.innerText = originalTitle;
  } else {
    document.title = "Titulo cambiado por js";
    //Funciona igual que innerText
    titleValue.textContent = document.title;
  }
};

const changeTitleButton = document.querySelector("#changeTitle");
changeTitleButton.addEventListener("click", changeTitle);

/**
 * Los elementos html tienen muchas propiedades. en el siguiente enlace se muestran algunos de ellos
 * https://www.w3schools.com/jsref/dom_obj_all.asp
 */
console.log("Propiedades del boton");
console.log("Tag name: " + changeTitleButton.tagName);
console.log("id: " + changeTitleButton.id);
console.log("style: ", changeTitleButton.style);
console.log("attributes: ", changeTitleButton.attributes);

/**
 * AGREGANDO Y REMOVIENDO CLASES
 * La propiedad "classList" permite listar, agregar y eliminar clases de CSS de un elemento.
 * classList enlista las clases del elemento
 * classList.add("nombreClase") => agrega una clase al elementos
 * classList.remove("nombreClase") => Remuve la clase del elementos si la tiene.
 * classList.toggle("className") => Agrega una clase si no la tiene o la remueve si la tiene.
 */

const element1 = document.querySelector(".change-title");
console.log(element1.classList);

const changeBorderColor = () => {
  const container = document.querySelector(".change-title");
  container.classList.toggle("border-green");
};

document.getElementById("changeColor").addEventListener('click', changeBorderColor);

/**
 * INSERTANDO ELEMENTOS
 * Para insertar elementos se tienen las siguientes clases:
 * createElement
 * appendChild
 */

const p = document.createElement("p");
//Se crea el texto
const text = document.createTextNode("Hola!");
p.appendChild(text);

element1.appendChild(p);
