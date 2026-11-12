
const form = document.getElementById("chat-form");
const input = document.getElementById("user-input");
const messages = document.getElementById("messages");

const INKI_API = "https://inki-cerebro.d70763712.workers.dev";

function addMessage(text, type) {
  const message = document.createElement("div");
  message.className = "message " + type;
  message.textContent = text;
  messages.appendChild(message);
  messages.scrollTop = messages.scrollHeight;
}

async function askInki(command) {
  const response = await fetch(INKI_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      message: command
    })
  });

  if (!response.ok) {
    throw new Error("Error de conexión: " + response.status);
  }

  const data = await response.json();

  if (!data.reply) {
    throw new Error("No llegó respuesta del cerebro.");
  }

  return data.reply;
}

form.addEventListener("submit", async function(event) {
  event.preventDefault();

  const command = input.value.trim();

  if (!command) return;

  addMessage(command, "user");
  input.value = "";
  input.disabled = true;

  try {
    const answer = await askInki(command);
    addMessage(answer, "inki");
  } catch (error) {
    addMessage(
      "Todavía no puedo conectar con mi cerebro. " + error.message,
      "inki"
    );
  } finally {
    input.disabled = false;
    input.focus();
  }
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js")
      .catch(error => console.error(error));
  });
}
