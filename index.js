var setaDireita = window.document.getElementById("setadireita")
var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var bruno = window.document.getElementById("bruno")
var setaEsquerda = window.document.getElementById("setaesquerda")

function RolarParadireita() {
leonardo.style ="display:none"
bruno.style = "display:flex"
setaEsquerda.style ="display:none"
setaDireita.style = "display:flex; margin-top:55px"
}

function RolarParaEsquerda(){
    leonardo.style = "display: flex"
    bruno.style = "display:none"
    setaEsquerda.style = "display:flex; margin-top:55px"
    setaDireita.style ="display:none"
}