import { saludar, saludarConNombre } from "./bot.js";

const saludoDiv = document.querySelector("#saludo-div");
const nombreInput = document.querySelector("#nombre-input");
const form = document.querySelector("#nombre-form");
const respuestaDiv = document.querySelector("#respuesta-div");

saludoDiv.innerHTML = "<p>" + saludar() + "</p>";

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const nombre = nombreInput.value;
  respuestaDiv.innerHTML = "<p>" + saludarConNombre(nombre) + "</p>";
});

console.log("Hora actual:", new Date().getHours());