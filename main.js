function adduser(){
    var nome1 = document.getElementById("input").value
    var nome2 = document.getElementById("input2").value
    
    localStorage.setItem("jogador1",nome1)
    localStorage.setItem("jogador2",nome2)
    window.location = "jogo.html"
}