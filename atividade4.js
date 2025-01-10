let faturamentoPorEstado = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

let faturamentoTotal = 0;
for (let estado in faturamentoPorEstado) {
    faturamentoTotal += faturamentoPorEstado[estado];
}

for (let estado in faturamentoPorEstado) {
    let percentual = (faturamentoPorEstado[estado] / faturamentoTotal) * 100;
    console.log(`O percentual de representação de ${estado} é: ${percentual.toFixed(2)}%`);
}
