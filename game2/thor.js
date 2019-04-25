var inputs = readline().split(' ');
const lightX = parseInt(inputs[0]); // the X position of the light of power
const lightY = parseInt(inputs[1]); // the Y position of the light of power
const initialTX = parseInt(inputs[2]); // Thor's starting X position
const initialTY = parseInt(inputs[3]); // Thor's starting Y position
let currentTX = initialTX;
let currentTY = initialTY;
// game loop
while (true) {
    const remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.
    var moveDirection;
    function additionalDirection(){
        if (currentTX < lightX){
            moveDirection +='E';
            currentTX +=1;
        } else if (currentTX > lightX){
            moveDirection +='W';
            currentTX -=1;
        }
    }
    if (currentTY > lightY){
        moveDirection ='N';
        currentTY -=1;
        additionalDirection();
    } else if (currentTY < lightY){
        moveDirection ='S';
        currentTY +=1;
        additionalDirection();
    } else if (currentTX < lightX){
        moveDirection ='E';
        currentTX +=1;
    } else if (currentTX > lightX){
        moveDirection ='W';
        currentTX -=1;
    }
    console.log(moveDirection);
}