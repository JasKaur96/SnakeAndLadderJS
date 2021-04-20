const optioncheck = require('./snakeLadder');
const opCheck = new optioncheck.SnakeAndLadder(0);
let playerPosition=0,positionMove =0;
let dice = 0,count1 =0,count2 =0;
let player1Position,player2Position
class Players{

  players(){
      while ((player1Position >= 0 && player1Position < 10) || (player2Position >= 0 && player2Position < 10)) {
        console.log("Player1's Turn :");
        count1++;
        opCheck.play();
        console.log("Player2's Turn :");
        count2++;
        opCheck.play();
      }
  }
}

module.exports = {Players}