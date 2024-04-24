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

let shownPics = 0
let picId1 = ''
let picId2 = ''
let picSRC1 = ''
let picSRC2 = ''


let picArr = [
    "Pictures/nat-0.jpg",
    "Pictures/nat-1.jpg",
    "Pictures/nat-2.jpg",
    "Pictures/nat-3.jpg",
    "Pictures/nat-4.jpg",
    "Pictures/nat-5.jpg",
    "Pictures/nat-6.jpg",
    "Pictures/nat-7.jpg",
    "Pictures/nat-8.jpg",
    "Pictures/nat-9.jpg"
]

let elemGridContainer = document.querySelector('#grid-container')

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; 
    }
    return array;
}

    let newArr = shuffleArray(picArr)
    for(let i = 0; i < diffLevel; i++){
        elemGridContainer.innerHTML += `<img src="./Pictures/black.jpg" class = 'grid-item' id = "id${i}" width=100 height=100 onclick = "showPic(this)" style="background-image:url(./${newArr[i]}) ;">`
    }
    newArr = shuffleArray(picArr)
    for(let i = diffLevel; i < diffLevel*2; i++){
        elemGridContainer.innerHTML += `<img src="./Pictures/black.jpg" class = 'grid-item' id = "id${i}" width=100 height=100 onclick = "showPic(this)" style="background-image:url(./${newArr[i-diffLevel]}) ;">`
    }

function showPic(x){
    shownPics ++;
    if(shownPics > 1){  
        
        let backgroundImageURL = getComputedStyle(x).backgroundImage; 
        x.src = backgroundImageURL.slice(4, -1).replace(/"/g, "");
        picId2 = x.id
        picSRC2 = x.src
        if(picSRC1 !== picSRC2){
            
            let elemNew = document.querySelector("#" + picId1);

            setTimeout(function() {
                x.src = "./Pictures/black.jpg"
                elemNew.src = "./Pictures/black.jpg";
                resetValues()
            }, 2000);
        }
        else{
            resetValues()
        } 
    }
    else{   
        let backgroundImageURL = getComputedStyle(x).backgroundImage; 
        x.src = backgroundImageURL.slice(4, -1).replace(/"/g, "");
        picSRC1 = x.src
        picId1 = x.id

    }
    
}

function resetValues(){
    picSRC1 = ''
    picSRC2 = ''
    picId1 = ''
    picId2 = ''
    shownPics = 0
}

















