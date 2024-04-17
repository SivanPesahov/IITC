let playerName = localStorage.getItem('playerName');
const elemHello = document.querySelector('#hello_playerName')
elemHello.innerText = `Hi ${playerName}, ready to play?`
let dificultyLevel = localStorage.getItem('dificultyLevel');


//---------------------------------------------------------------------------

let compGuess = []

function createRandomArr(){   
    while(compGuess.length  < dificultyLevel){
        let randomNumber = Math.floor(Math.random() * (10))
        if (!compGuess.includes(randomNumber)){
            compGuess.push(randomNumber)
        }
        
    }
    console.log(compGuess)
}

//---------------------------------------------------------------------------





