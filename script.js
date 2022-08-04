let pixelBoard = document.querySelector('#pixel-board');
let framePalete = document.querySelectorAll('color-palette');
let pixel = document.getElementsByClassName('pixel');
let colors = document.getElementsByClassName('color');
let btnLimpar = document.querySelector('#clear-board');
let size1 = document.querySelector('#board-size')
let size = size1.value;
let color = document.querySelector(".color")

function frame(size) {
  pixelBoard.style.setProperty('--size', size); // reference: https://www.youtube.com/watch?v=wZZyhrJxZRU
  for (let index = 0; index < size * size; index += 1) {
    let div = document.createElement('div');
    div.classList.add('pixel'); // criando uma classe nova

    div.addEventListener('mouseover', function(){
      div.style.backgroundColor = color.value

    });
    pixelBoard.appendChild(div); // ligando o pai ao filho
  }
}

frame(size);

function classSelect(evento) {
  let select = document.querySelector('.selected');
  select.classList.remove('selected');
  evento.target.classList.add('selected');
}

function addEvento() {
  for (let index = 0; index < colors.length; index += 1) {
    colors[index].addEventListener('click', classSelect);
  }
}
addEvento();

function clearFream() {
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
}
btnLimpar.addEventListener('click', clearFream);
