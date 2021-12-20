let containerCores = document.querySelector('#container-cores');
let arrayCores = [];
let textoRgb = document.getElementById('rgb-color');

function criandoCoresAleatorias() {
    for (let i = 0; i < 6; i+=1){
        let r = Math.floor(Math.random()*255);
        let g = Math.floor(Math.random()*255);
        let b = Math.floor(Math.random()*255);
        let rgb = "rgb(" + r + ',' + g + ',' + b + ")";
        arrayCores.push(rgb);        
    }    
}

function criandoDivsColoridas(){
    for (let i = 0; i < 6; i +=1){
        let divCores = document.createElement('div');
        containerCores.appendChild(divCores);
        divCores.className = 'cores-aleatorias';  
        divCores.style.backgroundColor = arrayCores[i];
    }
}

function rgbAleatorio(){
    let posicaoAleatoria = Math.floor(Math.random()*5)
    textoRgb.innerText = arrayCores[posicaoAleatoria]
}

criandoCoresAleatorias();
criandoDivsColoridas();
rgbAleatorio();









