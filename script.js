const lampada = document.querySelector('img.lamp')
const ligar = document.querySelector('button.ligar')
const desligar = document.querySelector('button.desligar')

function isLampBroken() {
    return lampada.src.indexOf == ('quebrada') > -1
}

function lampLigada() {
    if(!isLampBroken()) {
        lampada.src = './img/ligada.jpg'
    }
}

function lampDesligada() {
    if(!isLampBroken()) {
        lampada.src = './img/desligada.jpg'
    }
}

function mouseOn() {
    lampada.src = './img/ligada.jpg'
}

function mouseOver() {
    lampada.src = './img/desligada.jpg'
}

function dobleClick() {
    lampada.src = './img/quebrada.jpg'
}

ligar.addEventListener('click', lampLigada)
desligar.addEventListener('click', lampDesligada)
lampada.addEventListener('mouseover', mouseOn)
lampada.addEventListener('mouseleave', mouseOver)
lampada.addEventListener('dblclick', dobleClick)