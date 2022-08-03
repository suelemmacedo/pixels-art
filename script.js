// 4
let pixelBoard = document.querySelector('#pixel-board');
/* let sizeE1 = document.querySelector("#size")
const size= sizeE1.value */

function grid(size) {
  pixelBoard.style.setProperty('--size', size);
  for (let index = 0; index < size * size; index += 1) {
    let div = document.createElement('div');
    div.classList.add('pixel');
    pixelBoard.appendChild(div);
  }
}
grid(5);
