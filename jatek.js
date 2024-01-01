document.addEventListener('DOMContentLoaded', () => {
    const ut = document.querySelector('.road');
    const ellenfel = document.querySelector('.opponent');
    const jatekos = document.querySelector('.player');
    let pontKiiras = document.querySelector('.score');
    let rekordKiiras = document.querySelector('.highscore');
    let jatekosPozicio = parseInt(window.getComputedStyle(jatekos).getPropertyValue('left'));
    let pont = 0;
    let rekord = localStorage.getItem('rekord');
    rekordKiiras.innerHTML = 'Rekord: ' + rekord
    console.log(jatekosPozicio)

    
    function JatekosMozgatas(event){
        if(event.keyCode == 37){ //bal
            jatekosPozicio -= 200;
            if(jatekosPozicio >= 0){
                jatekos.style.left = jatekosPozicio + 'px';
                console.log(jatekosPozicio)
            }
            else jatekosPozicio += 200;
        }
        if(event.keyCode == 39){ //jobb
            jatekosPozicio += 200;
            if(jatekosPozicio < 600){
                jatekos.style.left = jatekosPozicio + 'px';
                console.log(jatekosPozicio)
            }
            else jatekosPozicio -= 200;
        }
    }
    
    document.addEventListener('animationiteration', function(){
        let rndEllenfelPoz = Math.floor(Math.random()*3) *200;
        ellenfel.style.left = rndEllenfelPoz + 'px';
        pont+=0.5;
        pontKiiras.innerHTML = "Pont: " + pont;
        if(pont > rekord) {
            rekord = pont;
            rekordKiiras.innerHTML = "Rekord: " + rekord;
        }
    })
    
    let JatekVege = setInterval(function () {
        let ellenfelPozicio = parseInt(window.getComputedStyle(ellenfel).getPropertyValue('left'));
        let ellenfelPozTop = parseInt(window.getComputedStyle(ellenfel).getPropertyValue('top'));
        
        if (jatekosPozicio == ellenfelPozicio && ellenfelPozTop > 400){
            alert('A játéknak vége!');
            ut.style.animation = 'none';
            ellenfel.style.animation = 'none';
            clearInterval(JatekVege);
            document.location.reload(true);
            pont = 0;
            pontKiiras.innerHTML = "Pont:" + pont;
            localStorage.setItem('rekord', rekord)
        }
    }, 100)


    document.addEventListener('keydown', JatekosMozgatas);
    
})