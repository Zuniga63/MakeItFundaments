let squares = document.querySelectorAll('.square');
for (const square of squares) {
  square.addEventListener('mouseover', removeSquare);
}

function addSquare() {
  //Se crea el elemento
  const square = document.createElement("div");
  //Se le agrega la clase
  square.classList.add("square");
  //Se agrega el evento
  square.addEventListener('mouseover', removeSquare);
  

  //Se agrega el elemento
  document.querySelector(".squares").appendChild(square);
}

function removeSquare(e){
  e.target.parentNode.removeChild(e.target);
  
}

document.getElementById("append").addEventListener('click', addSquare);
