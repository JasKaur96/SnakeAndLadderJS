const snakeLadder = require('./snakeLadder')
let start = 0;
class SnakeAndLadderMain{
    
    display(){
        console.log("*****Welcome to snake And Ladder Game!*****");   
        let snakeGame = new snakeLadder.SnakeAndLadder(start);
        return snakeGame.play();
    }
}

let game = new SnakeAndLadderMain();
console.log(game.display()); 