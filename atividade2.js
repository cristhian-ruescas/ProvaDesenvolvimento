const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function verificaFibonacci(numero) {
    let a = 0, b = 1;

    while (a < numero) {
        let temp = a;
        a = b;
        b = temp + b;
    }

    return a === numero;
}

rl.question("Me diga um número para verificar a sequência de Fibonacci: ", function(numeroInformado) {
    numeroInformado = parseInt(numeroInformado);

    if (verificaFibonacci(numeroInformado)) {
        console.log("O número " + numeroInformado + " pertence à sequência de Fibonacci.");
    } else {
        console.log("O número " + numeroInformado + " não pertence à sequência de Fibonacci.");
    }

    rl.close();
});
