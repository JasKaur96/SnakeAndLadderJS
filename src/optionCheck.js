let playerPosition=0,positionMove =0;
let dice = 0;
class OptionCheck{

    ladder(position,diceRoll){
        playerPosition = position;
        dice = diceRoll;
        playerPosition += dice;
        if(playerPosition > 100) {
            playerPosition -= dice;					
        }
        console.log("Your position is : " +playerPosition);
        return playerPosition;
    }

    snake(){

    }
}

module.exports = {OptionCheck}