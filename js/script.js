const alertMessage = document.querySelector(".alert-message-box");
const textBox = document.querySelector(".text-box");
const textAlert = document.querySelector(".alert");
const btnEncript = document.getElementById("encript");

const notification = (text) => {
  textAlert.textContent = "";
  textAlert.classList.add("active");
  setTimeout(() => {
    textAlert.classList.remove("active");
  }, 2600);
  textAlert.textContent = text;
};

inputText.focus();

function encriptText() {
  let textResult = document
    .getElementById("inputText")
    .value.replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

  if (textResult.length === 0 || /^\s+$/.test(textResult)) {
    notification(
      "El campo de texto está vacío. Escribe una palabra"
    );
  } else if (/[^a-z ]/.test(textResult)) {
    notification(
      "Solo se permiten letras minúsculas y sin acento"
    );
  } else {
    textBox.classList.remove("disabled");
    alertMessage.textContent = "";
  }

  document.getElementById("text-result").innerHTML = textResult;
  inputText.value = "";
  inputText.focus();
}

btnEncript.addEventListener("click", encriptText);

function decryptText() {
  let textResultDec = document
    .getElementById("inputText")
    .value.replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  document.getElementById("text-result").innerHTML = textResultDec;

  if (textResultDec.length === 0 || /^\s+$/.test(textResultDec)) {
    notification(
      "El campo de texto está vacío. Escribe una palabra"
    );
  } else if (/[^a-z ]/.test(textResultDec)) {
    notification(
      "Solo se permiten letras minúsculas y sin acento"
    );
  } else {
    textBox.classList.remove("disabled");
    alertMessage.textContent = "";
  }

  document.getElementById("text-result").innerHTML = textResultDec;
  inputText.value = "";
  inputText.focus();
}

function copyToClipBoard() {
  let copyText = document.getElementById("text-result").textContent;
  console.log({ copyText });
  navigator.clipboard.writeText(copyText).then(() => {
    if (copyText.length === 0 || /^\s+$/.test(copyText)) {
      notification("No hay texto que copiar");
    } else {
      notification("Texto copiado al portapapeles");
    }
  });
  inputText.focus();
}
