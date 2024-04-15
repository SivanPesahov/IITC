let sum = ''
let int_sum = 0
let adding_check = 0
let subtracting_check = 0
let multiplaying_check = 0
let division_check = 0
let global = 0

const elemAnswerLine = document.querySelector('#calc_window')

function insertNumber(num){
    sum += num
    elemAnswerLine.innerText = sum
}

function resetToZero(){
    sum = ""
    elemAnswerLine.innerText = '0'
}

function resetValues(){
    adding_check = 0
    subtracting_check = 0
    multiplaying_check = 0
    division_check = 0
    sum = ''
    int_sum = 0
    global = 0
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
    if(adding_check ==1)
    {
        sum = parseFloat(sum) + int_sum
        global += sum
        console.log(global)
        global = 0
        savingToValues()
        adding_check = 1
    }
    else{
        savingToValues()  
        adding_check = 1
    }
}

function subbing(){
    if(subtracting_check == 1){
        sum = int_sum - parseFloat(sum) 
        global -= sum
        console.log(global)
        global = 0

        savingToValues()
        subtracting_check = 1
    }
    else{
        savingToValues()
        subtracting_check = 1
    }
    
    
    
}

function multi(){
    if(multiplaying_check ==1){
        sum = parseFloat(sum) * int_sum
        global *= sum
        console.log(global)
        global = 0

        savingToValues()
        multiplaying_check = 1
    }
    
    else{
        savingToValues()
        multiplaying_check = 1
    }
}

function dividing(){
    if (division_check ==1)
    {
        sum = int_sum / parseFloat(sum) 
        global /= sum
        console.log(global)
        global = 0

        savingToValues()
        division_check = 1
    }
    else{
        savingToValues()
        division_check = 1
    }
    
}

function savingToValues(){
    int_sum = parseFloat(sum)
    sum = ''
    
}