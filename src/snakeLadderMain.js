const snakeLadder = require('./snakeLadder')
// const snakeLadder = require('./players')
let start = 0;
class SnakeAndLadderMain{
    
    display(){
        console.log("*****Welcome to snake And Ladder Game!*****");   
        let snakeGame = new snakeLadder.SnakeAndLadder(start);
    // players(player1Position,player2Position)
        // let snakeGame = new snakeLadder.Players();
      
        return snakeGame.players();
    }
}

let game = new SnakeAndLadderMain();
console.log(game.display()); 