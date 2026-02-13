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

function saludarConNombre(nombre) {
  const saludoHora = obtenerSaludoPorHora();
  return saludoHora + ", " + nombre;
}

export { saludar, saludarConNombre };