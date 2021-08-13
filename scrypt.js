const dino = document.querySelector('.dino');
let fundo = document.querySelector('.background');
let isJumping =false;
let position =0;
let pontos =0;

function handleKeyup(event){
    if(event.keyCode ==38){
        if(isJumping==false){
            console.log("pressionou espaço");
        jump();
        }
        
    }
}

function jump(){    

    isJumping =true;

    let upInterval= setInterval(()=>{
        if(position>150){
            clearInterval(upInterval);
            //descendo
            let downInterval =setInterval(()=>{
                if(position<=0){
                    clearInterval(downInterval);
                    isJumping=false;
                }else{
                    position-=10;
                    dino.style.bottom = position + 'px';
                }
                
            },20)

        }else{
            //subindo
            position+=20;
            dino.style.bottom =position + 'px';
            
        }
       
    },20)
}

function createCactus(){
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let randomTime = Math.random()*6000;

    cactus.classList.add('cactus');
    cactus.style.left = 1000 +'px';
    fundo.appendChild(cactus);

    let leftInterval = setInterval(()=>{       

        if(cactusPosition< -60){
            clearInterval(leftInterval);
            fundo.removeChild(cactus);
            pontos+=50;
        }else if(cactusPosition>0 && cactusPosition<60 && position<60){
            //Game Over
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1  class="game-over">Fim de Jogo - Pontuação:</h1><h1 id="game-over" class="game-over">Fim de Jogo</h1>'
            document.getElementById('game-over').innerHTML = pontos;           
            
        }else{
            cactusPosition-=10;
            cactus.style.left = cactusPosition + 'px';
        }
    },20);
    setTimeout(createCactus,randomTime);
}

createCactus();
document.addEventListener('keyup',handleKeyup);