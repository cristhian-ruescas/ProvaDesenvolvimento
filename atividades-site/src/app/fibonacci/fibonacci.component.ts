import { Component } from '@angular/core';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})
export class FibonacciComponent {
  numeroInformado: number = 0;
  resultado: boolean | null = null;
  erro: string | null = null;

  verificaFibonacci(numero: number): boolean {
    let a = 0, b = 1;
    while (a < numero) {
      let temp = a;
      a = b;
      b = temp + b;
    }
    return a === numero;
  }

  verificarFibonacci(): void {
    if (this.numeroInformado < 0) {
      this.erro = "Por favor, insira um número positivo.";
      this.resultado = null;
    } else {
      this.erro = null;
      this.resultado = this.verificaFibonacci(this.numeroInformado);
    }
  }
}
