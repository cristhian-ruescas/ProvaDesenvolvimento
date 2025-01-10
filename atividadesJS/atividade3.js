const fs = require('fs');

function lerFaturamentoDoArquivo(caminhoArquivo) {
    try {
        const dados = fs.readFileSync(caminhoArquivo, 'utf8');
        return JSON.parse(dados);
    } catch (err) {
        console.error('Erro ao ler o arquivo:', err);
        return [];
    }
}

function analisaFaturamento(faturamento) {
    let menorFaturamento = Infinity; 
    let maiorFaturamento = -Infinity; 
    let somaFaturamento = 0;
    let diasComFaturamento = 0;

    if (faturamento.length === 0) {
        console.log("Nenhum dado de faturamento disponível.");
        return {};
    }

    faturamento.forEach(dia => {
        if (dia.valor > 0) { 
            if (dia.valor < menorFaturamento) {
                menorFaturamento = dia.valor;
            }
            if (dia.valor > maiorFaturamento) {
                maiorFaturamento = dia.valor;
            }
            somaFaturamento += dia.valor;
            diasComFaturamento++;
        }
    });

    if (diasComFaturamento === 0) {
        console.log("Nenhum dia com faturamento registrado.");
        return {};
    }

    let mediaMensal = somaFaturamento / diasComFaturamento;

    let diasAcimaDaMedia = faturamento.filter(dia => dia.valor > mediaMensal).length;

    return {
        menorFaturamento,
        maiorFaturamento,
        diasAcimaDaMedia
    };
}

function formatarComoMoeda(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

const caminhoArquivo = './faturamento.json';

const faturamentoDiario = lerFaturamentoDoArquivo(caminhoArquivo);

if (faturamentoDiario.length > 0) {
    let resultados = analisaFaturamento(faturamentoDiario);

    if (resultados.menorFaturamento !== undefined) {
        console.log("Menor faturamento: " + formatarComoMoeda(resultados.menorFaturamento));
        console.log("Maior faturamento: " + formatarComoMoeda(resultados.maiorFaturamento));
        console.log("Número de dias com faturamento acima da média mensal: " + resultados.diasAcimaDaMedia);
    }
} else {
    console.log("Não foi possível processar os dados do arquivo.");
}
