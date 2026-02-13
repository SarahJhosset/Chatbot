import saludar from "./bot.js";

const div = document.querySelector("#saludo-div");

div.innerHTML = "<p>" + saludar() + "</p>";