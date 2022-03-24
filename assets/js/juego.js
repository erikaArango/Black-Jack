let deck = [];
const types = ['C','D','H','S'];
const especialCards = ['A','J','Q','K'];
//this function creates a new deck
const createDeck = () => {
    for (let i = 2; i <=10; i++ ){
        for(let type of types ) {
        deck.push( i + type);
        }
    }
    
    for (let type of types ){
        for(let esp of especialCards ) {
        deck.push( esp + type);
        }
    }
    //console.log(deck);
    deck = _.shuffle(deck);
    console.log('shuffled array',deck);

    return deck;
}
createDeck();

//his function allows me to take a letter
const orderCard = () => {
    if (deck.length === 0 ){
        throw 'No hay Cartas en el deck';
    }
    const card = deck.pop();

    console.log(deck);
    console.log(card);
    return card;
}

//orderCard();

const cardValue = (card) => {
    const valor = card.substring(0, card.length -1);
    return( isNaN() ) ?
    ( valor === 'A' ) ? 11 : 10
    : valor * 1;
    
    // let points = 0;
    // if (isNaN( valor )){
    //    points = ( valor === 'A' ) ? 11 : 10;
    // } else {
    //     console.log('Is a number');
    //     points = valor * 1;
    // }
    // console.log(points)
}
 const valor = cardValue ( orderCard() );
 console.log({ valor });
cardValue ('JD');