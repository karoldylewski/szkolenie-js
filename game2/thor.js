var inputs = readline().split(' ');
const lightX = parseInt(inputs[0]); // the X position of the light of power
const lightY = parseInt(inputs[1]); // the Y position of the light of power
const initialTX = parseInt(inputs[2]); // Thor's starting X position
const initialTY = parseInt(inputs[3]); // Thor's starting Y position
var currentTX = initialTX;
var currentTY = initialTY;
// game loop
while (true) {
    const remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.
    var moveDirection;
    if (currentTX < lightX && currentTY < lightY ){
        moveDirection ='SE';
        currentTX +=1;
        currentTY +=1;
    } else if (currentTX > lightX && currentTY < lightY){
        moveDirection ='SW';
        currentTX -=1;
        currentTY +=1;
    } else if(currentTY > lightY && currentTX > lightX){
        moveDirection ='NW';
        currentTX -=1;
        currentTY -=1;
    } else if (currentTY > lightY && currentTX < lightX){
        moveDirection ='NE';
        currentTX +=1;
        currentTY -=1;
    } else if (currentTX < lightX){
        moveDirection ='E';
        currentTX +=1;
    } else if (currentTX > lightX){
        moveDirection ='W';
        currentTX -=1;
    } else if (currentTY > lightY){
        moveDirection ='N';
        currentTY -=1;
    } else if  (currentTY < lightY){
        moveDirection ='S';
        currentTY +=1;
    }
    console.log(moveDirection);
}