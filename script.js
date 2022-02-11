const containerCores = document.querySelector('#container-cores');
const arrayCores = [];
const arrayAdivinhacao = [];
const textoRgb = document.getElementById('rgb-color');
let pontuacao = 0;
const placar = document.getElementById('score');
placar.innerText = `Placar: ${pontuacao} pontos!`; // "Placar: " + pontuacao + " pontos";
const acertouErrou = document.getElementById('answer');
const botao = document.getElementById('reset-game');

function criandoCoresAleatorias() {
  for (let i = 0; i < 6; i += 1) {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const rgb = `rgb(${r}, ${g}, ${b})`; // "rgb(" + r + ', ' + g + ', ' + b + ")";
    arrayCores.push(rgb);
    const adivinhacao = `(${r}, ${g}, ${b})`; // "(" + r + ', ' + g + ', ' + b + ")";
    arrayAdivinhacao.push(adivinhacao);
  }
}

function textoAdivinhacao() {
  const posicaoAleatoria = Math.floor(Math.random() * 5);
  textoRgb.innerText = arrayAdivinhacao[posicaoAleatoria];
}

function criandoDivsColoridas() {
  for (let i = 0; i < 6; i += 1) {
    const divCores = document.createElement('div');
    containerCores.appendChild(divCores);
    divCores.className = 'ball';
    divCores.style.backgroundColor = arrayCores[i];
  }
}

function procurandoResposta(event) {
  const texto = `rgb${textoRgb.innerText}`; // "rgb" + textoRgb.innerText;
  if (event.target.style.backgroundColor === texto) {
    acertouErrou.innerText = 'Acertou!';
    pontuacao += 3;
    placar.innerText = `Placar: ${pontuacao} pontos!`;
    // sessionStorage.setItem('valor', pontuacao)
  } else {
    acertouErrou.innerText = 'Errou! Tente novamente!';
  }
}

function criandoEscutadores() {
  for (let i = 0; i < 6; i += 1) {
    const pegandoDiv = document.querySelectorAll('.ball');
    pegandoDiv[i].addEventListener('click', procurandoResposta);
    console.log(pegandoDiv[i]);
  }
}

function criandoNovasDivs(advinhacao, cores) {
  const posicaoAleatoria = Math.floor(Math.random() * 5);
  textoRgb.innerText = advinhacao[posicaoAleatoria];
  for (let i = 0; i < 6; i += 1) {
    const divCores = document.createElement('div');
    containerCores.appendChild(divCores);
    divCores.className = 'ball';
    divCores.style.backgroundColor = cores[i];
  }
}

function resetarJogo() {
  while (containerCores.firstChild) {
    containerCores.removeChild(containerCores.firstChild);
  }
  const arrayCores2 = [];
  const arrayAdivinhacao2 = [];
  for (let i = 0; i < 6; i += 1) {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const rgb = `rgb(${r}, ${g}, ${b})`; // "rgb(" + r + ', ' + g + ', ' + b + ")";
    arrayCores2.push(rgb);
    const adivinhacao = `(${r}, ${g}, ${b})`; // "(" + r + ', ' + g + ', ' + b + ")";
    arrayAdivinhacao2.push(adivinhacao);
  }
  criandoNovasDivs(arrayAdivinhacao2, arrayCores2);
  criandoEscutadores();
  acertouErrou.innerText = 'Escolha uma cor';
}

criandoCoresAleatorias();
textoAdivinhacao();
criandoDivsColoridas();
criandoEscutadores();

botao.addEventListener('click', resetarJogo);
