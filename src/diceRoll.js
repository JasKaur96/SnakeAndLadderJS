const option = require('./constants');
let randomDice = 0; 
let randomOption = 0;
class DiceRoll{

    diceRoll(){
        randomDice = Math.floor(Math.random() * 10 ) % 6 + 1;
        return randomDice;
    }

    optionCheck(){
        randomOption = Math.floor(Math.random() * 10 ) % 3 + 1;
        switch(randomOption){
            case 1: 
                return option.LADDER;
            case 2:
                return option.SNAKE;
            case 3:
                return option.NO_PLAY;
        }
    }
}

module.exports = {DiceRoll}