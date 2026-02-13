function saludar() {
  return "Hola";
}

function obtenerHoraActual() {
  const ahora = new Date();
  return ahora.getHours();
}

function obtenerSaludoPorHora() {
  const hora = obtenerHoraActual();
  
  if (hora >= 6 && hora < 12) {
    return "Buenos días";
  } else if (hora >= 12 && hora < 20) {
    return "Buenas tardes";
  } else {
    return "Buenas noches";
  }
}

function obtenerTratamiento(genero) {
  if (genero === "masculino") {
    return "Señor";
  } else if (genero === "femenino") {
    return "Señora";
  } else {
    return "Persona";
  }
}

function saludarConNombre(nombre, genero) {
  const saludoHora = obtenerSaludoPorHora();
  const tratamiento = obtenerTratamiento(genero);
  
  if (tratamiento === "") {
    return saludoHora + ", " + nombre;
  } else {
    return saludoHora + ", " + tratamiento + " " + nombre;
  }
}

function saludarConGenero(genero) {
  const tratamiento = obtenerGenero(genero);
  return "Hola, " + tratamiento;
}

export { saludar, saludarConNombre, saludarConGenero };