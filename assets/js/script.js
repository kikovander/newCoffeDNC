// Bloco CARDS

// CARD 1
let botao1 = document.querySelector("#botao1");
let card1 = document.querySelector("#card1");

card1.addEventListener("mouseover", () => {
  botao1.style.display = "block";
});

card1.addEventListener("mouseout", () => {
  botao1.style.display = "none";
});

// CARD 2
let botao2 = document.querySelector("#botao2");
let card2 = document.querySelector("#card2");

card2.addEventListener("mouseover", () => {
  botao2.style.display = "block";
});

card2.addEventListener("mouseout", () => {
  botao2.style.display = "none";
});

// CARD 3
let botao3 = document.querySelector("#botao3");
let card3 = document.querySelector("#card3");

card3.addEventListener("mouseover", () => {
  botao3.style.display = "block";
});

card3.addEventListener("mouseout", () => {
  botao3.style.display = "none";
});

// CARD 4
let botao4 = document.querySelector("#botao4");
let card4 = document.querySelector("#card4");

card4.addEventListener("mouseover", () => {
  botao4.style.display = "block";
});

card4.addEventListener("mouseout", () => {
  botao4.style.display = "none";
});

// Fim do bloco CARDS

// openModalAtendimento

const openModalAtendimento = document.querySelector("#open-modal-atendimento");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
};

[openModalAtendimento, closeModalButton, fade].forEach((el) => {
  el.addEventListener("click", () => toggleModal());
});
