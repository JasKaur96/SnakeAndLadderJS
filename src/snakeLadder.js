

let player = "Player";

class SnakeAndLadder{
    constructor(start){
        this.start = start;
    }

    play(){
       return "Game Starts!\nYou are at position :" + this.start;
    }
}

module.exports = {SnakeAndLadder}