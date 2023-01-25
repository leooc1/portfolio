function menu(sanduiche){
    let menu = document.querySelector('.menu-escondido')
    if(sanduiche.style.transform == 'rotate(-90deg)'){
        sanduiche.style.transform = 'rotate(0deg)'
        menu.style.width = '0px'
        menu.style.height = '0px'
        sanduiche.src = '../src/image/menu-line.svg'
        sanduiche.style.transition = '1s'
        menu.style.transition = '1s'
    }
    else{
        sanduiche.style.transform = 'rotate(-90deg)'
        menu.style.width = '520px'
        menu.style.height = '580px'
        sanduiche.src = '../src/image/close-line.svg'
        sanduiche.style.transition = '1s'
        menu.style.transition = '1s'
    }
}

function tradeButton(button){
    let sobreMim = document.querySelector('.sobre-mim')
    let redesSociais = document.querySelector('.redes-sociais')

    if(button.classList.contains('sobre')){
        document.querySelector('.social').classList.remove('bttn-ativo')
        sobreMim.style.display = 'flex'
        redesSociais.style.display = 'none'
        button.classList.add('bttn-ativo')
    }
    else{
        document.querySelector('.sobre').classList.remove('bttn-ativo')
        sobreMim.style.display = 'none'
        redesSociais.style.display = 'flex'
        button.classList.add('bttn-ativo')
    }


}