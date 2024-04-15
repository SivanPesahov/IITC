let sum = ''
let int_sum = 0
let adding_check = 0
let subtracting_check = 0
let multiplaying_check = 0
let division_check = 0

let num1 = 0
let num2 = 0
let result = 0
let global_sum = 0

const elemAnswerLine = document.querySelector('#calc_window')

function insertNumber(num){
    sum += num
    elemAnswerLine.innerText = sum
}

function insertNumber2(n){
    sum += n
    num1 = parseFloat(sum)
    elemAnswerLine.innerText = sum
}

function resetToZero(){
    sum = ""
    elemAnswerLine.innerText = '0'
}

function resetToZero2(){
    num1 = 0
    num2 = 0
    result = 0
    elemAnswerLine.innerText = '0'
}

function resetValues2(){
    result = 0
    num1 = 0
    num2 = 0
    adding_check = 0
    subtracting_check = 0
    multiplaying_check = 0
    division_check = 0
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

function equals2(){
    if (adding_check == 1){
        result += num1
        elemAnswerLine.innerText = result
        resetValues2()
    }
    if (subtracting_check == 1){
        result -= num1
        elemAnswerLine.innerText = result
        resetValues2()
    }
    if (multiplaying_check == 1){
        result *= num1
        elemAnswerLine.innerText = result
        resetValues2()
    }
    if (division_check == 1){
        result /= num1
        elemAnswerLine.innerText = result
        resetValues2()
    }
    
}


function adding2(){
    sum =''
    num2 = num1
    result += num2
    num1 = 0
    adding_check = 1
}

function subbing2(){
    sum =''
    if (result > 0)
    {
        result -= num1
    }
    else{
        result = num1
    }
    num1 = 0
    subtracting_check = 1
}

function multi2(){
    sum =''
    if(result == 0)
    {
        result = num1
    }
    else{
        result *= num1
    }
    num1 = 0
    multiplaying_check = 1
}

function dividing2(){
    sum =''
    if (result == 0)
    {
        result = num1
    }
    else{
        result /= num1
    }
    num1 = 0
    division_check = 1
}



function adding(){
    if(adding_check ==1)
    {
        sum = parseFloat(sum) + int_sum
        console.log(global)
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
        console.log(global)

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
        console.log(global)

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
        console.log(global)

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