
const computerChoiceDisplay=document.getElementById('computer-choice')
const userChoiceDisplay=document.getElementById('user-choice')
const resultDisplay=document.getElementById('result')
const possibleChoice=document.querySelectorAll('button')

let computerChoce;
let userChoise , result;
possibleChoice.forEach(possibleChoice=>possibleChoice.addEventListener("click",(event)=>{
   userChoise = event.target.id
   userChoiceDisplay.innerHTML=userChoise;
   generateComputerChoice()
   getResult()
}));
function generateComputerChoice(){
    const randomNumber=Math.floor(Math.random()*possibleChoice.length+1)
    if(randomNumber===1){
        computerChoce="rock"
    }
    else if(randomNumber===2){
        computerChoce="scissors"
    }
    else if(randomNumber===3){
        computerChoce="paper"
    }
    computerChoiceDisplay.innerHTML=computerChoce;
}
function getResult(){
    if(computerChoce===userChoise){
        result="It,s a Draw"
    }
    if(computerChoce==="rock" && userChoise==="paper"){
        result="you Winnnnnn"
    }
    if(computerChoce==="rock" && userChoise==="scissors"){
        result="You lost!!!!!!!!!!"
    }
    if(computerChoce=="paper" && userChoise==="scissors"){
        result="You Winnnnn!!!!"
    }
    if (computerChoce=== "paper" && userChoise==="rock"){
        result="You lost!!!!"
    }
    if(computerChoce=== "scissors" && userChoise==="rock"){
        result="you winnnn!!!!!"
    }
    if (computerChoce==="scissiors" && userChoise==="paper"){
        result="you lost"
    }
    resultDisplay.innerHTML=result;
}

