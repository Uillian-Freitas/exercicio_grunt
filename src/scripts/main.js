const form = document.getElementById('sorteio-form');
const resultadoSpan = document.getElementById('resultado');

form.addEventListener('submit', function(evento){
    evento.preventDefault();

    const inputNumero = document.getElementById('numero-aleatorio');
    
        const valorDigitadoTexto = inputNumero.value;
        const valorDigitadoNumero = Number(valorDigitadoTexto);

        if(isNaN(valorDigitadoNumero) || valorDigitadoNumero < 1){
            resultadoSpan.textContent = 'Digite um número válido';
            return;
        }
        
        const numeroSorteado = Math.floor(Math.random() * valorDigitadoNumero) + 1;
        console.log('Número sorteado:', numeroSorteado);
        resultadoSpan.textContent = numeroSorteado;

});