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

for(let j = 0; j < 2; j++){
    let newArr = shuffleArray(picArr)
    for(let i = 0; i < diffLevel; i++){
        elemGridContainer.innerHTML += `<img src="./Pictures/black.jpg" class = 'grid-item' id = "${i}" width=100 height=100 onclick = "showPic(this)" style="background-image:url(./${newArr[i]}) ;">`
        // elemGridContainer.innerHTML += `<img src= ./Pictures/black.jpg class = 'grid-item' id = "id${i}" width=100 height=100 onclick = "showPic("id${i}")">`
    }
}

function showPic(x){
    
    let backgroundImageURL = getComputedStyle(x).backgroundImage; 
    x.src = backgroundImageURL.slice(4, -1).replace(/"/g, "");
}















// // for (let j = 0; j < 2; j++) {
//     let arr = shuffleArray(boardArr)
//     for (let i = 0; i < diffLevel; i++) {
//         let gridItem = document.createElement("div");
//         gridItem.classList.add("grid-item");
//         gridItem.id = "grid-item-" + (i);
//         let img = document.createElement("img");
//         img.src = arr[i]; 
//         img.width = 100
//         img.height = 100
//         gridItem.addEventListener("click", function() {
//             gridItem.appendChild(img);
            
//             setTimeout(myFunction(gridItem.id), 3000);

            
//         });       
//         gridContainer.appendChild(gridItem);
//     }
//     arr = shuffleArray(boardArr)
//     for (let i = 0; i < diffLevel; i++) {
//         let gridItem = document.createElement("div");
//         gridItem.classList.add("grid-item");
//         gridItem.id = "grid-item-" + (i + diffLevel);
//         let img = document.createElement("img");
//         img.src = arr[i]; 
//         img.width = 100
//         img.height = 100
//         gridItem.addEventListener("click", function() {
//             elemX = document.getElementById(this.id);
//             gridItem.appendChild(img);
            
//         });       
//         gridContainer.appendChild(gridItem);
//     }
// // }


// let id1 = ''
// let id2 = ''
// let open = 0

// function myFunction(x){
//     elemX = document.getElementById(x);
//     elemX.innerText = 'aaa'
//     console.log('bbb')

// }




