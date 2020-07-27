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

/* 3ex - Le tagline est aléatore ['Hello', 'Salut', 'Hola', 'Cześć'] */

const tagline = document.querySelector("#tagline");
const hellos = ["Salut", "Hello", "Cześć", "Hola"];
const randomHelloIndex = Math.floor(Math.random() * hellos.length);
tagline.innerHTML = `<strong>${hellos[randomHelloIndex]}</strong>`;

/* 4ex - L'intro-criteres contient l'information sur le nombre de critères */

const pIntroEl = document.getElementById("intro-criteres");

const criteres = document.querySelectorAll("#liste-criteres li");
console.log(criteres.length);

pIntroEl.textContent = `Nous avons préparés ${criteres.length} critères pour faciliter votre choix !`;

/*  5ex - Le bouton info affiche le titre (lang) et URL de la page */

const infoBtn = document.getElementById("info-btn");
//const infoBtn = document.querySelector("#info-btn")

const infoBtnClickHandler = () => {
  console.dir(document);
  alert(
    `Le titre de cette page est ${document.title} (${document.documentElement.lang}), son URL est ${document.documentElement.baseURI}`
  );
};

infoBtn.addEventListener("click", infoBtnClickHandler);

/* 6ex - Le panneau publicitaire disparait en click 
7ex -  Le panneau publicitaire disparait en click sur le bouton*/

const pubEl = document.getElementById("pub");
//const pubEl = document.querySelector("#pub")
const pubBtn = document.getElementById("pub-btn");

pubBtn.addEventListener("click", () => {
  // on ne veut plus avoir pubEl
  //supprimer :
  pubEl.remove();
  //cacher : pubEl.hidden = true;
});

/* création d'une fonction avec ex 2 et 3 */

function generateHeader() {
  const headerEl = document.getElementById("header");
  console.dir(headerEl);
  const colors = ["hotpink", "tomato", "orange"];
  const randomIndexColor = Math.floor(Math.random() * colors.length);

  headerEl.setAttribute(
    "style",
    `background-color:${colors[randomIndexColor]}!important`
  );

  const tagline = document.querySelector("#tagline");
  const hellos = ["Salut", "Hello", "Cześć", "Hola"];
  const randomHelloIndex = Math.floor(Math.random() * hellos.length);
  tagline.innerHTML = `<strong>${hellos[randomHelloIndex]}</strong>`;
}

/* 8 - Le bouton 😎 regénere la tagline */

const headerBtn = document.querySelector("#header button");

headerBtn.addEventListener("click", generateHeader);

/* 9ex - */

const buttons = document.querySelectorAll("button");
// const buttons = document.getElementsByTagName('button')

console.log(buttons);

for (let button of buttons) {
  button.disabled = true;
}

/* 10ex - */

const pCookies = document.createElement("p");
pCookies.textContent = "Ce site n'utilise pas des Cookies";

console.log(pCookies);

document.body.append(pCookies);
pCookies.className = "text-center";
