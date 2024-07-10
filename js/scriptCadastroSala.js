const select = document.querySelector("#select");
const inputSala = document.querySelector("#user");
function cadastrar() {
  const newElement = document.createElement("option");
  select.appendChild(newElement);
  newElement.innerHTML = inputSala.value;
}
