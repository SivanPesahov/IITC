let missionInput = document.querySelector('input')
let history = []
let elemList = document.querySelector("ul")


function creatLi(sorce){
    if(sorce.color == 'black'){
        elemList.innerHTML += `<li onclick="changeColorOfRow(this)">${sorce.value}</li>`
    }
    else{
        elemList.innerHTML += `<li onclick="changeColorOfRow(this)" style="color: green;">${sorce.value}</li>`
    }
}

function overRideHistoryInLocal(){
    localStorage.setItem('historyInLocal', JSON.stringify(history))
}

function insertIntoList(){

    if((!history.includes(missionInput.value) && (missionInput.value != ''))){
        let newOBJ = {value : missionInput.value, color : 'black'}
        history.push(newOBJ)
        overRideHistoryInLocal()
        creatLi(newOBJ)
    }
}

function changeColorOfRow(elem){
    for(let i of history){
        if(i.value == elem.innerText){
            if(i.color != "green"){
                elem.style.color = "green"
                i.color = 'green'   
            }
            else{
                elem.style.color = "black"
                i.color = "black"
                
            }
            overRideHistoryInLocal()
        }
    }
}

function clearRows(){
    elemList.innerHTML = ''
    history = []
    overRideHistoryInLocal()
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