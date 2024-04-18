let playerName = localStorage.getItem('playerName');
let dificultyLevel = localStorage.getItem('dificultyLevel');
const elemHello = document.querySelector('#hello_playerName')
elemHello.innerText = `Hi ${playerName}, ready to play?`

//---------------------------------------------------------------------------

let seconds = 0;
let intervalId;
const elemTime = document.querySelector('#time_counter')

//---------------------------------------------------------------------------

let compGuess = []
let compGuessString = ''
let guess = ''
let userGuess = []
let bulls = 0
let cows = 0
let history = []
const elemUserArr = document.querySelector('#user_arr')
const elemCompArr = document.querySelector('#computer_arr')

//---------------------------------------------------------------------------

let win = false
let giveUp = false
let elemWinMassage = document.querySelector('#win_massage')
let elemBulls = document.querySelector('#bulls')
let elemCows = document.querySelector('#cows')

//---------------------------------------------------------------------------

const elemHistoryTable = document.querySelector('table')

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
    if ((win == true) || (giveUp == true)) {
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
        let new_element = {userGuess, bulls, cows}
        history.push(new_element)
        showHistory()
        if(bulls == dificultyLevel){
            elemWinMassage.innerText = 'YOU WON!'
            elemWinMassage.style.color = "#7d2ae8"
            win = true
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
    giveUp = true
    elemCompArr.innerText = `This is the answer: ${compGuessString}`
    elemCompArr.style.color = "#7d2ae8"
}

function ResatAndGoToTheStart()
{
    playerName = ''
    dificultyLevel = 0
    window.location.href = 'bulls_and_cows_name_page.html';
}

function resetValues()
{
    location.reload();
}

function showHistory(){
    elemHistoryTable.innerHTML = "<tr><th>User attempts</th><th>Bulls</th><th>Cows</th></tr>"
    for (i of history){
        const elemRowInTable = `<tr><td> ${i.userGuess} </td><td> ${i.bulls} </td> <td> ${i.cows} </td></tr>`
        elemHistoryTable.innerHTML += elemRowInTable
    }
}