function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector('.change-color');
const bodyClass = document.querySelector('body');
const colorSpan = document.querySelector('.color')
function btnHandler(){
  const color = getRandomHexColor();
  console.log(color);
  bodyClass.style.backgroundColor = color;
  colorSpan.style.color = color;
}
btn.addEventListener('click', btnHandler)

