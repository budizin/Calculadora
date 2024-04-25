const resultadoInput = document.getElementById('resultado')

function mostrar(valor){
    if (valor === 'igual') {
        resultadoInput.textContent = aux
        resultadoInput.value = eval(aux);
    } else if (valor === 'reset') {
        resultadoInput.value = '';
    } else {
        resultadoInput.value += valor;
    }
}
