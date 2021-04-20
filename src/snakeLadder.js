const diceRoll = require('./diceRoll');
const roll = new diceRoll.DiceRoll();
const optioncheck = require('./optionCheck');
const opCheck = new optioncheck.OptionCheck();
let playerPosition =0;
let player = "Player";
let dice=0, count =0;
let option =0;
class SnakeAndLadder{
    constructor(start){
        this.start = start;
    }

    play(){
        console.log("Game Starts!\nYou are at position :" + this.start);
          while (playerPosition >= 0 && playerPosition < 100) {
            dice = roll.diceRoll();
            option = roll.optionCheck();
            console.log("\nDice Rolled : " +dice);
            count++;
            switch(option){
                case 1: 
                    playerPosition += dice; 
                    console.log("Yeah! You got a Ladder. ");
                    if(playerPosition > 100) {
                        playerPosition -= dice;					
                    }
                    break;
                case 2:
                    playerPosition -= dice;               
                    console.log("Oh No! Snake bit you. ");
                    if(playerPosition < 0){
                        playerPosition = 0;                
                        console.log("Oh No! Player at position Zero. ");
                    }
                    break;   
                case 3:               
                    console.log("Pass the chance. ");
                    break;
            }
            console.log("Your position is : " +playerPosition);
              
        }
        this.playerResult(playerPosition,count)
        return playerPosition;
    }

    playerResult(playerPosition,count){
        console.log("\nDice Rolled "+count+" times.")
		if(playerPosition == 100){
			console.log("\nCongratulations!!! You Won!");
		}
    }
}

module.exports = {SnakeAndLadder} 