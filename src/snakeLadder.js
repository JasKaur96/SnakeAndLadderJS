const diceRoll = require('./diceRoll');
const roll = new diceRoll.DiceRoll();

let player = "Player";

class SnakeAndLadder{
    constructor(start){
        this.start = start;
    }

    play(){
       console.log("Game Starts!\nYou are at position :" + this.start);

       return roll.diceRoll();
    }
}

module.exports = {SnakeAndLadder} 