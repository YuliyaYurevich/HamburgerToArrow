const hamburger = document.querySelector('.hamburger');
const lines = document.querySelectorAll('.btn-line');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');

hamburger.addEventListener('click', rotate);

hamburger.addEventListener('mouseover', colorToPink);

function colorToPink() {
  lines.forEach((line) => {
    line.classList.add('colorToPink');
  });
}

function rotate() {
  //hamburger.removeEventListener('mouseover', colorToPink);

  lines.forEach((line) => {
    line.classList.remove('colorToPink');
  });

  one.classList.toggle('arrowOne');
  three.classList.toggle('arrowThree');

  lines.forEach((line) => {
    line.classList.toggle('changeColor');
  });
}
