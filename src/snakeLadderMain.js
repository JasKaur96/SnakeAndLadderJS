const snakeLadder = require('./snakeLadder')
// const snakeLadder = require('./players')
let start = 0;
class SnakeAndLadderMain{
    
    display(){
        console.log("*****Welcome to snake And Ladder Game!*****");   
        let snakeGame = new snakeLadder.SnakeAndLadder(start);
        console.log( snakeGame.players())
        return snakeGame.playerResult();
    }
}

let game = new SnakeAndLadderMain();
console.log(game.display()); 