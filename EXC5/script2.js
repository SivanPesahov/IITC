let sum = ''
let int_sum = 0
let adding_check = 0
let subtracting_check = 0
let multiplaying_check = 0
let division_check = 0

const elemAnswerLine = document.querySelector('#calc_window')

function insertNumber(num){
    sum += num
    elemAnswerLine.innerText = sum
}

function resetToZero(){
    sum = ""
    elemAnswerLine.innerText = sum
}

function resetValues(){
    adding_check = 0
    subtracting_check = 0
    multiplaying_check = 0
    division_check = 0
    sum = ''
    int_sum = 0
}

function equals(){


    if(adding_check == 1){
        let n = int_sum + parseFloat(sum)
        elemAnswerLine.innerText = n
        resetValues()
    }

    if(subtracting_check == 1){
        let n = int_sum - parseFloat(sum)
        elemAnswerLine.innerText = n
        resetValues()

    }

    if(multiplaying_check == 1){
        let n = int_sum * parseFloat(sum)
        elemAnswerLine.innerText = n
        resetValues()

    }

    if(division_check == 1){
        let n = int_sum / parseFloat(sum)
        elemAnswerLine.innerText = n
        resetValues()

    }


}

function adding(){
    savingToValues()
    adding_check = 1
}

function subbing(){
    savingToValues()
    subtracting_check = 1
}

function multi(){
    savingToValues()
    multiplaying_check = 1
}

function dividing(){
    savingToValues()
    division_check = 1
}

function savingToValues(){
    int_sum = parseFloat(sum)
    sum = ''
    elemAnswerLine.innerText = sum
}