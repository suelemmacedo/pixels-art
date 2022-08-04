let pixelBoard = document.querySelector('#pixel-board');
let framePalete = document.querySelectorAll('color-palette');
let pixel = document.getElementsByClassName('pixel');
let colors = document.getElementsByClassName('color');
let btnLimpar = document.querySelector('#clear-board');
let size1 = document.querySelector('#board-size');
let size = size1.value;
let color = document.querySelector('.color');
let color1 = document.querySelectorAll('.color');

function randomColor() {
  //reference: https://wallacemaxters.com.br/blog/48/como-gerar-cores-aleatorias-no-javascript
  let rgbcolor = Math.floor(Math.random() * 255);
  return rgbcolor;
}

function definedColors() {
  color1[0].style.backgroundColor = 'black';
  for (let index = 1; index < color1.length; index += 1) {
    color1[index].style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
    console.log(color1[index].color);
  }
}
definedColors();

const colocaCor = function (event) {
  let select = document.querySelector('.selected');
  event.target.style.backgroundColor = select.style.backgroundColor;
};

function frame(size) {
  pixelBoard.style.setProperty('--size', size); // reference: https://www.youtube.com/watch?v=wZZyhrJxZRU
  for (let index = 0; index < size * size; index += 1) {
    let div = document.createElement('div');
    div.classList.add('pixel'); // criando uma classe nova

    div.addEventListener('click', colocaCor);
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

function btnVQV() {
  let btn = document.querySelector('#generate-board');
}

function limitedFrame(tamanho) {
  if (tamanho < 5) {
    return 5;
  } else if (tamanho > 50) {
    return 50;
  }
  return tamanho;
}
