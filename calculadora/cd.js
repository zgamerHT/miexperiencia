"use strict";
let tablero = document.querySelector(".texto");
const botones = document.querySelectorAll(".boton");

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    tablero.textContent += boton.textContent;
  });
});

document.querySelector(".boton.AC").addEventListener("click", () => {
  tablero.textContent = null;
});
