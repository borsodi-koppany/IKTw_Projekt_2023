// let kepek = document.getElementsByClassName("kepnezegeto-kep");
// let kepIndex = 0;
// KepMutatas(kepIndex);

// function KoviKep(){
//     kepIndex++;
//     if(kepIndex > kepek.length) kepIndex = 0;
//     return kepIndex;
// }

// function ElozoKep(){
//     kepIndex--
//     if(kepIndex < 0) kepIndex = kepek.length;
//     return kepIndex;
// }

// function KepMutatas(n){
//     let aktKep = kepek[n];
//     let elozo = 0;
//     if(n == 0) elozo = kepek[kepek.length];
//     else elozo = kepek[n - 1];
    
//     elozo.style.display = "none"
//     aktKep.style.display = "block";
// }


let kepIndex = 1;
KepMutatas(kepIndex);


function KepValtas(n){
    let aktIndex = kepIndex += n;
    console.log(aktIndex);
    return aktIndex
}


function KepMutatas(n){
    let kepek = document.getElementsByClassName("kepnezegeto-kep");
    if (n > kepek.length) n = 1;
    if (n < 1) n = kepek.length;
    for(let i = 1; i < kepek.length; i++){
        kepek[i].style.display = "none";
    }
    kepek[n - 1].style.display = "block";
}