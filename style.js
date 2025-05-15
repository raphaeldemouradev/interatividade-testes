function trocacor() {
var rescor = document.getElementById('rescor')
var corpo = document.body

    if (corpo.style.background === 'black') {
        corpo.style.background = 'white'
        corpo.style.color = 'black'

        rescor.innerHTML = 'Modo Escuro'
    } else {
        corpo.style.background = 'black'
        corpo.style.color = 'white'

        rescor.innerHTML = 'Modo Claro'
    }
} 