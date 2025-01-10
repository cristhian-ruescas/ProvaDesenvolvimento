import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-exercicio4',
  templateUrl: './exercicio4.component.html',
  styleUrls: ['./exercicio4.component.css'],
  providers: [DecimalPipe]
})
export class Exercicio4Component {
  faturamentoPorEstado: { [key: string]: number } = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
  };

  percentuais: { estado: string, percentual: string }[] = [];

  constructor(private decimalPipe: DecimalPipe) {}

  calcularPercentuais() {
    let faturamentoTotal = Object.values(this.faturamentoPorEstado).reduce((acc, valor) => acc + valor, 0);

    return Object.keys(this.faturamentoPorEstado).map((estado: string) => {
      const percentual = (this.faturamentoPorEstado[estado] / faturamentoTotal) * 100;
      return { estado: estado, percentual: percentual.toFixed(2) };
    });
  }

  onCalcularPercentuais() {
    this.percentuais = this.calcularPercentuais();
  }

  formatarEmReais(valor: number): string {
    return this.decimalPipe.transform(valor, '1.2-2')?.replace('.', ',') || '0,00';
  }
}
