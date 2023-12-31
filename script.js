let kepIndex = 0;

function Valtas(n){
    Megjelenites(kepIndex += n)
}

function Megjelenites(n){
    let kepek = document.getElementsByClassName("kepnezegeto-kep");
    if(n > kepek.length - 1) kepIndex = 0;
    if(n < 0) kepIndex = kepek.length - 1;
    for(let i = 0; i < kepek.length; i++){
        kepek[i].style.display = "none";
    }
    kepek[kepIndex].style.display = "block";
}

function Elozo(){
    Valtas(-1);
}

function Kovetkezo(){
    Valtas(1);
}

// function jump(){
//     let count = 5;
//     let jumpTimer = setInterval(() => {
//         if(count == 20){
//             clearInterval(jumpTimer);
//             let downTimer = setInterval(()=>{
//                 if(count == 5){
//                     clearInterval(downTimer);
//                     isJumping = false;
//                 }
//                 position -= 5;
//                 position = position * gravity;
//                 dino.style.bottom = position + 'px';
//                 count--;
//             }, 20);
//         }
//         position+=30;
//         position = position * gravity;
//         dino.style.bottom = position + 'px';
//         count++;
//     }, 20);
// }

// function generateEllenfel(){
//     let randomTime = (Math.random()*2000)+500;
//     let ellenfelPosition = 1500;
//     let ellenfel = document.createElement('div');

//     if(!isGameOver){
//         ellenfel.classList.add('ellenfel');
//         ellenfel.style.left=ellenfelPosition + 'px';
//         grid.appendChild(ellenfel);
//     }
//     let timer = setInterval(() => {
//         if(ellenfelPosition > 0 && ellenfelPosition < 60 && position < 60){
//             clearInterval(timer);
//             alert.innerHTML  = 'Game Over! Score: ' + score;
//             isGameOver = true;
//             while(grid.firstChild){
//                 grid.removeChild(grid.lastChild);
//             }
//         }
//         if(ellenfelPosition == 0){
//             score++;
//             alert.innerHTML = score;
//         }
//         ellenfelPosition -= 10;
//         ellenfel.style.left = ellenfelPosition + 'px';
//     }, 30)

//     if(!isGameOver){
//         setTimeout(generateEllenfel, randomTime);
//     }
// }

// document.addEventListener('keyup', control);
// generateEllenfel();
