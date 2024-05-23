let menu = document.querySelector('#menuSobe')

window.addEventListener('scroll', up)

function up() {
    var posicaoScroll = window.scrollY;

    if (posicaoScroll > 15) {
        menu.style.top = '-43px'
        menu.style.borderRadius = '10px';
    } else if ( posicaoScroll === 0) {
        menu.style.top = '102px'
        menu.style.borderRadius = '10px 10px 0px 0px'
    }
        
}

