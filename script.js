const luzParar = document.querySelector('#luzParar');
const luzAtencao = document.querySelector('#luzAtencao');
const luzSeguir = document.querySelector('#luzSeguir');

function parar() {
    resetar();
    luzParar.style.background = '#dd2e44';
}
function atencao() {
    resetar();
    luzAtencao.style.background = '#ffcc4d';
}
function seguir() {
    resetar();
    luzSeguir.style.background = '#77b255';
}

function resetar() {
    luzParar.style.background = 'black';
    luzAtencao.style.background = 'black';
    luzSeguir.style.background = 'black';
}
