let deck = [];
const types = ["C", "D", "H", "S"];
const especialCards = ["A", "J", "Q", "K"];

let playerPoints = 0;
let computerPoints = 0;

//references HTML
const btnPedir   = document.querySelector('#btnPedir');
const htmlPoints = document.querySelectorAll( 'small');

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
  return isNaN() ? (valor === "A" ? 11 : 10) : valor * 1;

  // let points = 0;
  // if (isNaN( valor )){
  //    points = ( valor === 'A' ) ? 11 : 10;
  // } else {
  //     console.log('Is a number');
  //     points = valor * 1;
  // }
  // console.log(points)
};

//eventos

btnPedir.addEventListener("click", ( ) => {
  const card = orderCard();

  playerPoints = playerPoints + cardValue(card);
  htmlPoints [ 0 ].innerText = playerPoints ;
  console.log(playerPoints);
});
