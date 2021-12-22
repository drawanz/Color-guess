let containerCores = document.querySelector('#container-cores');
let arrayCores = [];
let arrayAdivinhacao = [];
let textoRgb = document.getElementById('rgb-color');
//let pontuacao =  sessionStorage.getItem('valor');
let placar = document.getElementById('score');
if (sessionStorage.getItem('valor') === null) {
    pontuacao = 0;
    console.log(pontuacao);
} else {
    pontuacao = JSON.parse(sessionStorage.getItem('valor'));
    console.log(pontuacao);
}
placar.innerText = "Placar: " + pontuacao + " pontos";
let acertouErrou = document.getElementById('answer');
let botao = document.getElementById('reset-game');

function criandoCoresAleatorias() {
    for (let i = 0; i < 6; i+=1){
        let r = Math.floor(Math.random()*255);
        let g = Math.floor(Math.random()*255);
        let b = Math.floor(Math.random()*255);
        let rgb = "rgb(" + r + ', ' + g + ', ' + b + ")";
        arrayCores.push(rgb);
        let adivinhacao = "(" + r + ', ' + g + ', ' + b + ")";
        arrayAdivinhacao.push(adivinhacao)
    }    
}

function textoAdivinhacao(){
    let posicaoAleatoria = Math.floor(Math.random()*5)
    textoRgb.innerText = arrayAdivinhacao[posicaoAleatoria]
}

function criandoDivsColoridas(){
    for (let i = 0; i < 6; i +=1){
        let divCores = document.createElement('div');
        containerCores.appendChild(divCores);
        divCores.className = 'ball';  
        divCores.style.backgroundColor = arrayCores[i];
    }
}

function procurandoResposta(event){   
    let texto = "rgb" + textoRgb.innerText;
    if (event.target.style.backgroundColor === texto){
        acertouErrou.innerText = "Acertou!"
        pontuacao = pontuacao + 3;
        placar.innerText = "Placar: " + pontuacao + " pontos"
        sessionStorage.setItem('valor', pontuacao)
    }    
    else {
        acertouErrou.innerText = "Errou! Tente novamente!";
        //pontuacao = pontuacao -1;
        //placar.innerText = "Placar: " + pontuacao + " pontos"
        //sessionStorage.setItem('valor', pontuacao)
    }      
}

function criandoEscutadores(){
    for (let i = 0; i < 6; i +=1){
        let pegandoDiv = document.querySelectorAll('.ball');
        pegandoDiv[i].addEventListener('click', procurandoResposta)
        console.log(pegandoDiv[i]);
    }
}

function resetarJogo(){
    location.reload()
    //nppontuacao = sessionStorage.getItem('valor');
}

criandoCoresAleatorias();
textoAdivinhacao();
criandoDivsColoridas();
criandoEscutadores();

botao.addEventListener('click', resetarJogo);









