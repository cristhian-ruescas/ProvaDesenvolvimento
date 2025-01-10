import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio3',
  templateUrl: './exercicio3.component.html',
  styleUrls: ['./exercicio3.component.css']
})
export class Exercicio3Component {
  numeroInformado: number = 0;
  resultado: boolean | null = null;
  erro: string | null = null;
  faturamento: any[] = [];
  resultFaturamento: any = null;

  verificaFaturamento() {
    let menorFaturamento = Infinity;
    let maiorFaturamento = -Infinity;
    let somaFaturamento = 0;
    let diasComFaturamento = 0;

    if (this.faturamento.length === 0) {
      console.log("Nenhum dado de faturamento disponível.");
      return;
    }

    this.faturamento.forEach(dia => {
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
      return;
    }

    let mediaMensal = somaFaturamento / diasComFaturamento;
    let diasAcimaDaMedia = this.faturamento.filter(dia => dia.valor > mediaMensal).length;

    this.resultFaturamento = {
      menorFaturamento,
      maiorFaturamento,
      diasAcimaDaMedia
    };
  }

  processarArquivo(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        try {
          const jsonContent = JSON.parse(e.target.result);
          this.faturamento = jsonContent;
          this.verificaFaturamento();
        } catch (err) {
          this.erro = 'Erro ao processar o arquivo. Certifique-se de que é um JSON válido.';
        }
      };
      reader.readAsText(file);
    }
  }
}
