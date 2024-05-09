const botoes = document .querySelectorA11(".botao");
const textos = document .querySelectorA11(".aba-conteudo");

for (let i=0;i <botoes.length;++) 
botoes[1].onclick = function(){

for(let j=0;j<botoes.length;j++){
botoes[j].classList.remove("ativo");
textos[j].classList.remove("ativo")
}

  botoes[i].classList.add('ativo');
  textos[i].classList.add("ativo")
}


const contadores = document .querySelectorA11("contador");
const tempoObjetivo1 = new Date("2010-10-05t00:00:00")
const tempoObjetivo2 = new Date("2023-12-05t00:00:00")
const tempoObjetivo3 = new Date("2023-12-30t00:00:00")
const tempoObjetivo4 = new Date("2024-02-01t00:00:00")

const tempo = [tempoObjetivo1,tempoObjetivo2,tempoObjetivo3,tempoObjetivo4];


function calculaTempo(tempoObjetivo){
  let tempoAtual1 = new Date();
  let tempoFinal1 = tempoObjetivo- tempoAtual;
  let segundos = Math.floor(tempoFinal1 / 1000);
  let minutos = Math.floor(segundos / 60);
  let horas  = Math.floor(minutos / 60);
  let dias = Math.floor(horas / 24);}
  
  segundos %= 60;
  minutos %= 60;
  horas %= 24;
if (tempoFinal1 > 0){
  return dias + "dias" + horas + "horas" + minutos + "minutos" + segundos + "segundos";
} else {
return "Prazo Finalizado";
}

  
  function atualizaCronometro(){
  for (let i=0; i<contadores.length;i++){
    contadores[i].textcontext = calculaTempo(tempos[i]);
  }
  }
    
  function comecaCronometro(){
  atualizaCronometro();
  setInterval(atualizaCronometro,1000);
  }

 //comecaCronometro();