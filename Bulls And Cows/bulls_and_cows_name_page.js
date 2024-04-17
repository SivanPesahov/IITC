let playerName = ''
let dificultyLevel = 0
const elemPlayerName = document.querySelector('#id1')
const elemSeccesfulSave = document.querySelector('#id2')
const elemDificultyLevel = document.querySelector('#id3')
const elemSeccesfulSaveLevel = document.querySelector('#id4')
const numCheck = document.querySelector('#id5')

function saveName()
{
    playerName += elemPlayerName.value
    localStorage.setItem('playerName', playerName);
    
    elemSeccesfulSave.style.color = "#7d2ae8"
}

function saveDificulty()
{
    dificultyLevel += elemDificultyLevel.valueAsNumber
    if((dificultyLevel >= 1) || (dificultyLevel <= 9))
    {
    localStorage.setItem('dificultyLevel', dificultyLevel);
    elemSeccesfulSaveLevel.style.color = "#7d2ae8"

    }
    else{
        numCheck.style.color = "#7d2ae8"
    }

}

function continue_to_game()
{
    if((dificultyLevel >= 1) || (dificultyLevel <= 9))
        {
           window.location.href = 'bulls_and_cows.html';
    
        }
}

// document.getElementById('myButton').addEventListener('click', function() {
    
//     if((dificultyLevel >= 1) || (dificultyLevel <= 9))
//     {
//         window.location.href = 'bulls_and_cows.html';

//     }
// });