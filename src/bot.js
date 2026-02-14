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

function obtenerTratamiento(genero, edad) {
  const edadNumerica = Number(edad);
  
  if (genero === "" || isNaN(edadNumerica) || edadNumerica === 0) {
    return "";
  }
  
  if (genero === "masculino") {
    if (edadNumerica < 18) {
      return "joven";
    } else {
      return "Sr.";
    }
  } else if (genero === "femenino") {
    if (edadNumerica < 18) {
      return "señorita";
    } else {
      return "Sra.";
    }
  } else {
    return "";
  }
}

function saludarConNombre(nombre, genero, edad) {
  const saludoHora = obtenerSaludoPorHora();
  const tratamiento = obtenerTratamiento(genero, edad);
  
  if (tratamiento === "") {
    return saludoHora + ", " + nombre;
  } else {
    return saludoHora + ", " + tratamiento + " " + nombre;
  }
}

export { saludar, saludarConNombre };