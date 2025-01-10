let faturamentoDiario = [
    { "dia": 1, "faturamento": 100 },
    { "dia": 2, "faturamento": 0 },
    { "dia": 3, "faturamento": 1150 },
    { "dia": 4, "faturamento": 400 },
    { "dia": 5, "faturamento": 20 },
    { "dia": 6, "faturamento": 0 },
    { "dia": 7, "faturamento": 100 },
    { "dia": 8, "faturamento": 200 },
    { "dia": 9, "faturamento": 10000 },
    { "dia": 10, "faturamento": 100 }
];

function analisaFaturamento(faturamento) {
    let menorFaturamento = Infinity; 
    let maiorFaturamento = -Infinity; 
    let somaFaturamento = 0;
    let diasComFaturamento = 0;

    faturamento.forEach(dia => {
        if (dia.faturamento > 0) { 
            if (dia.faturamento < menorFaturamento) {
                menorFaturamento = dia.faturamento;
            }
            if (dia.faturamento > maiorFaturamento) {
                maiorFaturamento = dia.faturamento;
            }
            somaFaturamento += dia.faturamento;
            diasComFaturamento++;
        }
    });

    let mediaMensal = somaFaturamento / diasComFaturamento;

    let diasAcimaDaMedia = faturamento.filter(dia => dia.faturamento > mediaMensal).length;

    return {
        menorFaturamento,
        maiorFaturamento,
        diasAcimaDaMedia
    };
}

let resultados = analisaFaturamento(faturamentoDiario);

console.log("Menor faturamento: " + resultados.menorFaturamento);
console.log("Maior faturamento: " + resultados.maiorFaturamento);
console.log("Número de dias com faturamento acima da média mensal: " + resultados.diasAcimaDaMedia);
