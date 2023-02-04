function menu(sanduiche){
    let card = document.querySelector('main')
    let menu = document.querySelector('.menu-escondido')
    if(sanduiche.style.transform == 'rotate(-90deg)'){
        sanduiche.style.transform = 'rotate(0deg)'
        menu.style.width = '0px'
        menu.style.height = '0px'

        document.querySelector('.esc-home').style.fontSize = '0'
        setTimeout(()=>{
            document.querySelector('.esc-home').style.width = '0'
            document.querySelector('.esc-home').style.padding = '0'
            document.querySelector('.logo-home').src = ''
        },100) 
        document.querySelector('.esc-home').style.transition = '.3s'

        document.querySelector('.esc-proj').style.fontSize = '0'
        setTimeout(()=>{
            document.querySelector('.esc-proj').style.width = '0'
            document.querySelector('.esc-proj').style.padding = '0'
            document.querySelector('.logo-projetos').src = ''
        },100) 
        document.querySelector('.esc-proj').style.transition = '.3s'

        sanduiche.style.transition = '1s'
        menu.style.transition = '1s'
    }
    else{
        sanduiche.style.transform = 'rotate(-90deg)'
            menu.style.width = '100%'
            menu.style.height = '100%'
        /////////////////////////////////////
            
        document.querySelector('.esc-home').style.fontSize = '18pt'
        setTimeout(()=>{
            document.querySelector('.esc-home').style.padding = '10px'
            document.querySelector('.esc-home').style.width = '190px'
            document.querySelector('.logo-home').src = '../src/image/home-2-line.svg'
        },100)
        document.querySelector('.esc-home').style.transition = 'width 1s, font-size 1s, background-color .3s'

        document.querySelector('.esc-proj').style.fontSize = '18pt'
        setTimeout(()=>{
            document.querySelector('.esc-proj').style.width = '190px'
            document.querySelector('.esc-proj').style.padding = '10px'
            document.querySelector('.logo-projetos').src = '../src/image/folder-user-line.svg'
        },100)
        document.querySelector('.esc-proj').style.transition = 'width 1s, font-size 1s, background-color .3s'

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
        document.querySelector('.svg-sobre').src = '../src/image/user-3-fill.svg'
        document.querySelector('.svg-redes').src = '../src/image/message-2-line.svg'
    }
    else{
        document.querySelector('.sobre').classList.remove('bttn-ativo')
        sobreMim.style.display = 'none'
        redesSociais.style.display = 'flex'
        button.classList.add('bttn-ativo')
        document.querySelector('.svg-redes').src = '../src/image/message-2-fill.svg'
        document.querySelector('.svg-sobre').src = '../src/image/user-3-line.svg'
    }
}

function home(){
    document.querySelector('.projetos').style.display = 'none'
    document.querySelector('.menu-sanduiche').src = '../src/image/menu-line (1).svg'
    let menuSanduiche = document.querySelector('.menu-sanduiche')
    menu(menuSanduiche);
}

function projetos(){
    document.querySelector('.projetos').style.display = 'block'
    let menuSanduiche = document.querySelector('.menu-sanduiche')
    menu(menuSanduiche);
}