var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")

function rolarparaesquerda() {
    leonardo.style = "display:none"
    bruna.style = "display:flex"
    setadireita.style = "display:none"
    setaesquerda.style = "display:flex"
}       

function rolarparadireita() {
    bruna.style = "display:none"
    leonardo.style = "display:flex"
    setadireita.style = "display:flex"
    setaesquerda.style = "display:none"
}