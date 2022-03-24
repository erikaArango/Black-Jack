let deck = [];
const types = ['C','D','H','S'];
const especialCards = ['A','J','Q','K'];

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
    console.log(deck);

    deck = _.shuffle(deck);
    console.log('shuffled array',deck);

    return deck;
}

createDeck();