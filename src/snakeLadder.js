const diceRoll = require('./diceRoll');
const roll = new diceRoll.DiceRoll();
let playerPosition =0;
let player = "Player";
let dice=0;
let option =0;
class SnakeAndLadder{
    constructor(start){
        this.start = start;
    }

    play(){
        console.log("Game Starts!\nYou are at position :" + this.start);
          while (playerPosition <= 100) {
            dice = roll.diceRoll();
            option = roll.optionCheck();
            console.log("\nDice Rolled : " +dice);
     
            switch(option){
                case 1: 
                    playerPosition += dice; 
                    console.log("Yeah! You got a Ladder. ");
                    break;
                case 2:
                    if(playerPosition >= 0){
                        playerPosition -= dice;                
                        console.log("Oh No! Snake bit you. ");
                        break;
                    }
                    else{
                        playerPosition = 0;                
                        console.log("Oh No! Player at position Zero. ");
                        break;
                    }
                        
                case 3:               
                    console.log("Pass the chance. ");
                    break;
            }
            console.log("Your position is : " +playerPosition);
              
        }
        return playerPosition;
    }
}

module.exports = {SnakeAndLadder} 