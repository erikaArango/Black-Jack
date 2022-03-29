let deck = [];
const types = ["C", "D", "H", "S"];
const especialCards = ["A", "J", "Q", "K"];

let playerPoints = 0;
let computerPoints = 0;

//references HTML
const btnOrder = document.querySelector("#btnOrder");
const btnStop = document.querySelector( "#btnDetener");

const divPlayerCards = document.querySelector("#player-cards");
const divComputerCards = document.querySelector("#computer-cards");

const htmlPoints = document.querySelectorAll("small");

//this function creates a new deck
const createDeck = () => {
  for (let i = 2; i <= 10; i++) {
    for (let type of types) {
      deck.push(i + type);
    }
  }

  for (let type of types) {
    for (let esp of especialCards) {
      deck.push(esp + type);
    }
  }
  //console.log(deck);
  deck = _.shuffle(deck);
  console.log("shuffled array", deck);

  return deck;
};
createDeck();

//his function allows me to take a letter
const orderCard = () => {
  if (deck.length === 0) {
    throw "No hay Cartas en el deck";
  }
  const card = deck.pop();

  return card;
};

//orderCard();

const cardValue = (card) => {
  const valor = card.substring(0, card.length - 1);
  return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
};

//computerShift

const computerShift = (minumunPoints) => {
  do {
  const card = orderCard();

  computerPoints = computerPoints + cardValue(card);
  htmlPoints[1].innerText = computerPoints;

  const imgCard = document.createElement("img");
  imgCard.src = `assets/cartas/${card}.png`;
  imgCard.classList.add("imageCard");
  divComputerCards.append(imgCard);

  if (minimunPoints > 21) {
      break;
  }

} while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );
};

//eventos

btnOrder.addEventListener("click", () => {
  const card = orderCard();

  playerPoints = playerPoints + cardValue(card);
  htmlPoints[0].innerText = playerPoints;

  //section where the player asks for the cards
  const imgCard = document.createElement("img");
  imgCard.src = `assets/cartas/${card}.png`;
  imgCard.classList.add("imageCard");
  divPlayerCards.append(imgCard);

  if (playerPoints > 21) {
    console.warn("Lo siento, Perdiste :(");
    btnOrder.disabled = true;
    btnStop.disabled = true;
    computerShift( playerPoints);

  } else if (playerPoints === 21) {
    console.warn(" Ganaste!!!");
    btnOrder.disabled = true;
    btnStop.disabled = true;

    computerShift( playerPoints);
  }
});

btnStop.addEventListener("click", ( ) => {
    btnOrder.disabled = true;
    btnStop.disabled = true;

    computerShift ( playerPoints )


})


