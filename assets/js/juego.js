//patron modulo
/* (( ) => {

}) ( ); */

(( ) => {
    'use strict'


        let deck = [];
        const types = ["C", "D", "H", "S"];
        const especialCards = ["A", "J", "Q", "K"];
        
        let playerPoints = 0;
        let computerPoints = 0;
        
        //references HTML
        const btnOrder = document.querySelector("#btnOrder");
        const btnStop = document.querySelector("#btnDetener");
        const btnNew = document.querySelector("#btnNew");
        
        const divPlayerCards = document.querySelector("#player-cards");
        const divComputerCards = document.querySelector("#computer-cards");
        
        const htmlPoints = document.querySelectorAll("small");

       
        
        //this function creates a new deck
        const createDeck = () => {
            deck = [ ];
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
                        
            return  _.shuffle(deck);
        };
        createDeck();
        
        //his function allows me to take a letter
        const orderCard = () => {
            if (deck.length === 0) {
                throw "No hay Cartas en el deck";
            }
                return deck.pop();
        };
        
        //orderCard();
        
        const cardValue = (card) => {
        const valor = card.substring(0, card.length - 1);
        return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
        };
        
        //computerShift
        
        const computerShift = (minimunPoints) => {
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
        } while (computerPoints < minimunPoints && minimunPoints <= 21);
        
        setTimeout(() => {
                if (computerPoints === minimunPoints) {
                alert("Nadie Gana");
                } else if (minimunPoints > 21) {
                alert("Computadora Gana");
                } else if (computerPoints > 21) {
                alert("Jugador Gana");
                } else {
                alert("Computadora Gana");
                }
        }, 10);
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
                    computerShift(playerPoints);
            } else if (playerPoints === 21) {
                    console.warn(" Ganaste!!!");
                    btnOrder.disabled = true;
                    btnStop.disabled = true;
                
                    computerShift(playerPoints);
            }
        });
        
        btnStop.addEventListener("click", () => {
            btnOrder.disabled = true;
            btnStop.disabled = true;
            
            computerShift(playerPoints);
        });
        
        btnNew.addEventListener("click", () => {
                console.clear();
                
                deck = [ ];
                deck = createDeck();
                
                playerPoints = 0;
                computerPoints = 0;
                
                htmlPoints[0].innerText = 0;
                htmlPoints[1].innerText = 0;
                
                divComputerCards.innerHTML = " ";
                divPlayerCards.innerHTML = " ";
                
                btnOrder.disabled = false;
                btnStop.disabled = false;
        }); 

}) ( );



