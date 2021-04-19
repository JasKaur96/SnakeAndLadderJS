
let randomDice = 0; 
class DiceRoll{

    diceRoll(){
        randomDice = Math.floor(Math.random() * 10 ) % 6 + 1;
        return "Dice Shows : "+randomDice;
    }
}

module.exports = {DiceRoll}