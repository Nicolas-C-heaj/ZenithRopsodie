"use strict";

document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('accueil__button');
    const pageBody = document.querySelector('body');
  
    startBtn.addEventListener('click', () => {
      // ajoute la classe d'animation
      pageBody.classList.add('slide-up');
  
      // attend la fin de l'animation avant de changer de page
      setTimeout(() => {
        window.location.href = 'page_card.html'; // Change ici l'URL si nécessaire
      }, 500);
    });
  });

// animation SVG
document.addEventListener("DOMContentLoaded", () => {

    const lines = document.querySelectorAll(".greenLine, .redLine, .blueLine, .yellowLine");

    lines.forEach(line => {

        const length = line.getTotalLength();

        line.style.strokeDasharray = length;
        line.style.strokeDashoffset = length;

        setTimeout(() => {
            line.classList.add("play-animation");
        }, getRandomIntInclusive(500, 3000));



        line.style.setProperty("--path-length", length);
    });
});

console.log(document.querySelector(".greenLine").getTotalLength());
console.log(document.querySelector(".redLine").getTotalLength());
console.log(document.querySelector(".blueLine").getTotalLength());
console.log(document.querySelector(".yellowLine").getTotalLength());

function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

window.addEventListener('mousedown', function () {
  particle.classList.add('click');
});
window.addEventListener('mouseup', function () {
  particle.classList.remove('click');
});
document.addEventListener('DOMContentLoaded', () => {
  const cursor = document.querySelector('.cursor--custom');
  document.querySelector('.accueil__body').addEventListener('mousemove', function (e) {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });
  // effet clic
  window.addEventListener('mousedown', function () {
    cursor.classList.add('click');
  });
  window.addEventListener('mouseup', function () {
    cursor.classList.remove('click');
  });
});