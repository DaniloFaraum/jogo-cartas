'use strict'

const cartas =[
    {
        nome:"Fantasma",
        imagem: "./assets/fantasminhas.png",
        stats:{
        ataque:2,
        defesa:3,
        mente:7
        }
    },
    {
        nome:"Aberração",
        imagem: "./assets/cães.png",
        stats:{
        ataque:6,
        defesa:4,
        mente:5
        }
    },
    {
        nome: "Mudkip",
        imagem: "./assets/asas.png",
        stats:{
        ataque: 4,
        defesa: 6,
        mente:2
        }
    }
]
let cartaPlr
let cartaBot

function sortear() {
    let cartaBotNum = parseInt(Math.random()*3)
    let cartaPlrNum = parseInt(Math.random()*3)

    cartaPlr = cartas[cartaPlrNum]

    while (cartaBotNum == cartaPlrNum){
        cartaBotNum = parseInt(Math.random()*3)
    }
    cartaBot = cartas[cartaBotNum]

    document.getElementById("btnSortear").disabled = true
    document.getElementById("btnJogar").disabled = false
    exibirCartaPlr()
}

function choosenStata() {
  const choosenStat = document.getElementsByName("stats")
  for (let i = 0; i < choosenStat.length; i++){
      if (choosenStat[i].checked == true) {
        return choosenStat[i].value
      }
  }
}

function jogar() {
    let choosenStat = choosenStata()

    let valorCartaPlr = cartaPlr.stats[choosenStat]
    let valorCartaBot = cartaBot.stats[choosenStat]

    if (valorCartaPlr > valorCartaBot) 
        document.getElementById("resultado").innerHTML = "<p class='resultado-final'>Ganhou!</p>"
    else if (valorCartaBot > valorCartaPlr)
        document.getElementById("resultado").innerHTML = "<p class='resultado-final'>Perdeu</p>"
    else
    document.getElementById("resultado").innerHTML = "<p class='resultado-final'>Empatou</p>" 
    document.getElementById("btnJogar").disabled = true
    exibirCartaBot()
}

function exibirCartaPlr () {
   let divPlr = document.getElementById("carta-jogador")
   divPlr.style.backgroundImage= `url(${cartaPlr.imagem})`
   const moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">'
   const tagHTML = '<div id="opcoes" class="carta-status">'
   let opcoes = document.getElementById("opcoes")
   let opcoesTxt = ""
   for (var stat in cartaPlr.stats) {
    opcoesTxt += "<input type='radio' name='stats' value='" + stat + "'>" + stat + " " + cartaPlr.stats[stat] + '<br>'  
}
let nome = `<p class="carta-subtitle">${cartaPlr.nome}`
divPlr.innerHTML = moldura + nome + tagHTML + opcoesTxt + "</div>"
}

function exibirCartaBot () {
    let divBot = document.getElementById("carta-maquina")
    divBot.style.backgroundImage= `url(${cartaBot.imagem})`
    const moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">'
    const tagHTML = '<div id="opcoes" class="carta-status">'
    let opcoes = document.getElementById("opcoes")
    let opcoesTxt = ""
    for (var stat in cartaBot.stats) {
     opcoesTxt += "<p name='stats' value='" + stat + "'>" + stat + " " + cartaBot.stats[stat] + '<br>'  
 }
 let nome = `<p class="carta-subtitle">${cartaBot.nome}`
 divBot.innerHTML = moldura + nome + tagHTML + opcoesTxt + "</p>"
 }