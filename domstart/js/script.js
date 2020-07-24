"use strict";
/* 1 - Le contenu de body apparait avec transition */
//document.body.style.background = "magenta";
//document.body.style.opacity = 0;
//document.body.style.transition = "1s";

//setTimeout crée un délai
setTimeout(() => {
  document.body.style.opacity = 1; //style inline, force 1000
}, 500);

// 2ex - La propriété background-color de l'élément header est aléatoire ["hotpink", "tomato", "orange"]
const headerEl = document.getElementById("header");
console.dir(headerEl);
const colors = ["hotpink", "tomato", "orange"];
const randomIndexColor = Math.floor(Math.random() * colors.length);

/*headerEl.style.backgroundColor = colors[randomIndexColor];*/
/* Cette façon permet d'avoir plus de force que bootstrap*/

headerEl.setAttribute(
  "style",
  `background-color:${colors[randomIndexColor]}!important`
);

/* 3ex - (a faire) Le tagline est aléatore ['Hello', 'Salut', 'Hola', 'Cześć'] */

/* 4ex - */

const pIntroEl = document.getElementById("intro-criteres");

const criteres = document.querySelectorAll("#liste-criteres li");
console.log(criteres.length);

pIntroEl.textContent = `Nous avons préparés ${criteres.length} critères pour faciliter votre choix !`;
