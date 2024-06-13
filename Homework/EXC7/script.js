let obj = {value : 2, index : 3}

function saveToLocal(){
    localStorage.setItem('myObj', JSON.stringify(obj))
}

function readFromLocal(){
    let x = localStorage.getItem('myObj')
    console.log(x)
}

//--------------------------------------------------------------------

let missionInput = document.querySelector('input')
let history = []
let elemList = document.querySelector("ul")


function creatLi(sorce){
    elemList.innerHTML += `<li onclick="deleteRow(this)">${sorce}</li>`
}

function overRideHistoryInLocal(){
    localStorage.setItem('historyInLocal', JSON.stringify(history))
}

function insertIntoList(){

    if((!history.includes(missionInput.value) && (missionInput.value != ''))){
        history.push(missionInput.value)
        overRideHistoryInLocal()
        creatLi(missionInput.value)
    }
}

function deleteRow(elem){
    for(let i of history){
        if(i == elem.innerText){
            history.splice(history.indexOf(i), 1)
            overRideHistoryInLocal()
            elem.remove() 
        }
    }
}

function sortABC(){
    history.sort()
    overRideHistoryInLocal()
    elemList.innerHTML = ''
    for(let i of history){
        creatLi(i)
    }
}

let tempHistory = JSON.parse(localStorage.getItem("historyInLocal"))

if(!tempHistory.length == 0){
    for(let i of tempHistory){
        creatLi(i)
        history.push(i)
    }
}

