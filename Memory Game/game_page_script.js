let playerName = localStorage.getItem('playerName');
let diffLevel = localStorage.getItem('diffLevel');
const elemHelloMessage = document.querySelector('#hello_playerName')
elemHelloMessage.innerText = `Hi ${playerName}, ready to play?`

//----------------------------------------------------------------------

let seconds = 0;
let intervalId;
const elemTime = document.querySelector('#time_counter')

function countSeconds() {
    seconds++; 
    if (1 == 2) {
        clearInterval(intervalId); 
        console.log("Count stopped."); 
    }
    elemTime.innerText = `Time passed: ${seconds} seconds`
}

intervalId = setInterval(countSeconds, 1000);

//----------------------------------------------------------------------

function showHistory(){
    elemHistoryTable.innerHTML = "<tr><th>User attempts</th><th>Bulls</th><th>Cows</th></tr>"
    for (i of history){
        const elemRowInTable = `<tr><td> ${i.userGuess} </td><td> ${i.bulls} </td> <td> ${i.cows} </td></tr>`
        elemHistoryTable.innerHTML += elemRowInTable
    }
}


var gridContainer = document.getElementById("grid-container");

for (var i = 0; i < diffLevel*2; i++) {
    var gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridItem.textContent = i; 
    gridContainer.appendChild(gridItem);
}