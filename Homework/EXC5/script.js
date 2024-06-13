    let history = []
    const elemNum1 = document.querySelector('#num1')
    const elemNum2 = document.querySelector('#num2')
    const elemResult = document.querySelector('#result')
    const elemHistoryTable = document.querySelector('table')

    function addHistoryItem(op, res){

        const calc = {
            num1 : elemNum1.valueAsNumber, 
            num2 : elemNum2.valueAsNumber, 
            operator : op, 
            sum : res
        }
        history.push(calc)
    }

    function showHistory(){
        elemHistoryTable.innerHTML = "<tr><th>First number</th><th>Operation</th><th>Second number</th><th>Result</th></tr>"
        for (i of history){
            const elemRowInTable = `<tr><td> ${i.num1} </td><td> ${i.operator} </td> <td> ${i.num2} </td><td> ${i.sum} </td></tr>`
            elemHistoryTable.innerHTML += elemRowInTable
        }
    }
        
    function addNumber(){

        const sum = elemNum1.valueAsNumber + elemNum2.valueAsNumber
        elemResult.innerText = sum 
        addHistoryItem('+', sum)
    }

    function subNumber(){
        
        const sum = elemNum1.valueAsNumber - elemNum2.valueAsNumber
        elemResult.innerText = sum
        addHistoryItem('-', sum)
    }

    function multiNumber(){
        
        const sum = elemNum1.valueAsNumber * elemNum2.valueAsNumber
        elemResult.innerText = sum
        addHistoryItem('*', sum)
    }

    function divNumber(){
        
        const sum = elemNum1.valueAsNumber / elemNum2.valueAsNumber
        elemResult.innerText = sum
        addHistoryItem('/', sum)
    }