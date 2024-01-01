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
