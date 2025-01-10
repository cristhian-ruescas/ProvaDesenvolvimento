const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function inverterString(str) {
    let resultado = "";
    
    for (let i = str.length - 1; i >= 0; i--) {
        resultado += str[i];  
    }
    
    return resultado;  
}

rl.question('Informe uma string para inverter: ', (entrada) => {
    let stringInvertida = inverterString(entrada);
    console.log('A string invertida é:', stringInvertida);
    
    rl.close();
});
