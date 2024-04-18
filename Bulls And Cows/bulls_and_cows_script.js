let playerName = localStorage.getItem('playerName');
let dificultyLevel = localStorage.getItem('dificultyLevel');
const elemHello = document.querySelector('#hello_playerName')
elemHello.innerText = `Hi ${playerName}, ready to play?`

//---------------------------------------------------------------------------

let seconds = 0;
var intervalId;
const elemTime = document.querySelector('#time_counter')

//---------------------------------------------------------------------------

let compGuess = []
let compGuessString = ''
let guess = ''
let userGuess = []
let bulls = 0
let cows = 0
const elemUserArr = document.querySelector('#user_arr')
const elemCompArr = document.querySelector('#computer_arr')

//---------------------------------------------------------------------------

let elemWinMassage = document.querySelector('#win_massage')
let elemBulls = document.querySelector('#bulls')
let elemCows = document.querySelector('#cows')

//---------------------------------------------------------------------------


function createRandomArr(){   
    while(compGuess.length  < dificultyLevel){
        let randomNumber = Math.floor(Math.random() * (10))
        if (!compGuess.includes(randomNumber)){
            compGuess.push(randomNumber)
            compGuessString += randomNumber
        }
        
    }
    
    console.log(compGuess)
}

function assertCompGuessToString(){
    for(i of compGuess)
    {
        compGuessString += i
    }
}

function startGame()
{
    intervalId = setInterval(countSeconds, 1000);
    createRandomArr()
}

function countSeconds() {
    seconds++; 
    console.log(seconds)
    if (seconds >= 3) {
        clearInterval(intervalId); 
        console.log("Count stopped."); 
    }
    elemTime.innerText = `Time passed: ${seconds} seconds`
}

function insertNumberIntoGuess(x){
    guess += x
    elemWinMassage.innerText = guess
    elemWinMassage.style.color = "#7d2ae8" 
    
    console.log(guess)
    if(guess.length == dificultyLevel){
        for(let i = 0; i < guess.length; i++){
            userGuess.push(guess[i])
        }
        checkForBulls(userGuess)
        checkForCows(userGuess)
        if(bulls == 4){
            elemWinMassage.innerText = 'YOU WON!'
            elemWinMassage.style.color = "#7d2ae8"
        }
        else{
            resetTry()
        }
    }
}

function checkForBulls(userGuess){
    for(i of compGuess){
        for(j of userGuess){
            if((j == i) && (userGuess.indexOf(j) == compGuess.indexOf(i))){
                bulls ++
            }
        }
    }
    elemBulls.innerText = bulls
}

function checkForCows(userGuess){
    for(i of compGuess){
        for(j of userGuess){
            if((j == i) && (userGuess.indexOf(j) != compGuess.indexOf(i))){
                cows ++
            }
        }
    }
    elemCows.innerText = cows
}

function resetTry(){
    bulls = 0
    cows = 0
    guess = ''
    userGuess = []
}

function giveUpAndShowComparr(){
    elemCompArr.innerText = `This is the answer: ${compGuessString}`
    elemCompArr.style.color = "#7d2ae8"
}

function ResatAndGoToTheStart()
{
    playerName = ''
    dificultyLevel = 0
    window.location.href = 'bulls_and_cows_name_page.html';
}
