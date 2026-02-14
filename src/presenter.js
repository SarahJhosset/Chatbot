import { saludar, saludarConNombre } from "./bot.js";

// Seleccionar elementos del HTML
const saludoDiv = document.querySelector("#saludo-div");
const nombreInput = document.querySelector("#nombre-input");
const generoSelect = document.querySelector("#genero-select");
const edadInput = document.querySelector("#edad-input");
const form = document.querySelector("#nombre-form");
const respuestaDiv = document.querySelector("#respuesta-div");

saludoDiv.innerHTML = "<p>" + saludar() + "</p>";

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const nombre = nombreInput.value;
  const genero = generoSelect.value;
  const edad = edadInput.value;
  
  respuestaDiv.innerHTML = "<p>" + saludarConNombre(nombre, genero, edad) + "</p>";
});