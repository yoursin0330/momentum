const dicegame=document.body.querySelector(".dice-game");
const roll=dicegame.querySelector("#rolling-dice")

const userDiceImg=dicegame.querySelector("#dice-game__user img")
const comDiceImg=dicegame.querySelector("#dice-game__computer img" )

const diceWinner=dicegame.querySelector("#dice-game__winner")
function rollTheDice(){
    const userNum=Math.floor(Math.random()*6)+1;
    const comNum=Math.floor(Math.random()*6)+1;
    userDiceImg.src=`img/dices/dice${userNum}.png`;
    comDiceImg.src=`img/dices/dice${comNum}.png`;
    if(userNum>comNum){
        diceWinner.innerText="You Won!"
    }else if(userNum===comNum){
        diceWinner.innerText="Draw"
    }else{
        diceWinner.innerText="You Lost!"
    }
}

roll.addEventListener("click",rollTheDice)