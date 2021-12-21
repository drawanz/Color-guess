let containerCores = document.querySelector('#container-cores');
let arrayCores = [];
let arrayAdivinhacao = [];
let textoRgb = document.getElementById('rgb-color');
let pontuacao = 0;
let placar = document.getElementById('placar')

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
        let acertouErrou = document.getElementById('answer')
        acertouErrou.innerText = "Acertou!"
        pontuacao += 3;
        placar.innerText = "Placar: " + pontuacao + " pontos"
    }    
    else {
        let acertouErrou = document.getElementById('answer')
        acertouErrou.innerText = "Errou! Tente novamente!";
        pontuacao = 0;
        placar.innerText = "Placar: " + pontuacao + " pontos"
    }
}

function criandoEscutadores(){
    for (let i = 0; i < 6; i +=1){
        let pegandoDiv = document.querySelectorAll('.ball');
        pegandoDiv[i].addEventListener('click', procurandoResposta)
        console.log(pegandoDiv[i]);
    }
}

criandoCoresAleatorias();
textoAdivinhacao();
criandoDivsColoridas();
criandoEscutadores();










