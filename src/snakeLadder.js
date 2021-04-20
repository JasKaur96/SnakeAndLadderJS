const diceRoll = require('./diceRoll');
const roll = new diceRoll.DiceRoll();
// const optioncheck = require('./players');
// const opCheck = new optioncheck.OptionCheck();
let playerPosition =0;
let player = "Player",player1Position = 0, player2Position = 0;
let dice=0, count =0,count1=0,count2=0;
let option =0;
class SnakeAndLadder{
    constructor(start){
        this.start = start;
    }
    players(){
        console.log("Game Starts!\nYou are at position :" + this.start);
       
        while ((player1Position >= 0 && player1Position < 20) || (player2Position >= 0 && player2Position < 20)) {
           
                console.log("\nPlayer1's Turn:");
                dice = roll.diceRoll();
                option = roll.optionCheck();
                console.log("Dice Rolled : " +dice);
                player1Position = this.play(option,dice,player1Position);
                count1++;
           
            if(player1Position == 20 ){break;}
           
                console.log("\nPlayer2's Turn:");
                dice = roll.diceRoll();
                option = roll.optionCheck();
                console.log("Dice Rolled : " +dice);
                player2Position = this.play(option,dice,player2Position);
                count2++;
            
            if(player2Position == 20 ){break;}
        }
        return [player1Position,player2Position,count1,count2];
      
    }

    play(option,dice,playerPosition){
            switch(option){
                case 1: 
                    playerPosition += dice; 
                    console.log("Yeah! You got a Ladder. ");
                    if(playerPosition > 20) {
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
        
        return playerPosition;
    }

    playerResult(){
        console.log("\nPlayer1's Dice Rolled "+count1+" times.\nPlayer2's Dice Rolled "+count2+" times.")
		if(player1Position == 20){
			console.log("\nCongratulations!!! Player1 Won!");
        }
        if(player2Position == 20){
            console.log("\nCongratulations!!! Player2 Won!");
        }
        return [player1Position,player2Position]

    }
}

module.exports = {SnakeAndLadder} 