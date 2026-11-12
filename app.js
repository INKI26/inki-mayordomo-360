
const form = document.getElementById("chat-form");
const input = document.getElementById("user-input");
const messages = document.getElementById("messages");

function addMessage(text, type) {
  const message = document.createElement("div");
  message.className = "message " + type;
  message.textContent = text;
  messages.appendChild(message);
  messages.scrollTop = messages.scrollHeight;
}

function getResponse(command) {
  const text = command.toLowerCase();

  if (text.includes("hola")) {
    return "¡Hola! Estoy listo. ¿Qué vamos a construir hoy?";
  }

  if (text.includes("hotmart")) {
    return "Hotmart será uno de mis centros de operaciones. Prepararemos la gestión de productos, tiendas y afiliaciones.";
  }

  if (text.includes("ventas")) {
    return "Vamos a trabajar en nuestra estrategia de ventas digitales. Primero organizaremos los productos y los clientes.";
  }

  if (text.includes("marketing")) {
    return "Prepararemos campañas, publicaciones y estrategias para llegar a clientes internacionales.";
  }

  if (text.includes("afiliados")) {
    return "Vamos a organizar oportunidades de afiliación, productos y comisiones.";
  }

  if (text.includes("finanzas")) {
    return "Podremos organizar ingresos, gastos y resultados cuando conectemos nuestras herramientas financieras.";
  }

  if (text.includes("ayuda")) {
    return "Puedo conversar sobre ventas, Hotmart, marketing, afiliados, finanzas y gestión. Estamos construyendo mis funciones progresivamente.";
  }

  return "He recibido tu orden. Todavía estoy en mi versión inicial. Seguiremos incorporando inteligencia artificial y conexiones para poder ejecutar tareas reales.";
}

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const command = input.value.trim();

  if (!command) return;

  addMessage(command, "user");
  input.value = "";

  const response = getResponse(command);

  setTimeout(function() {
    addMessage(response, "inki");
  }, 400);
});
