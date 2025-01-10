import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio1',
  templateUrl: './exercicio1.component.html',
  styleUrls: ['./exercicio1.component.css']
})
export class Exercicio1Component {
  animando = false;
  numerosVisiveis: number[] = [];
  resultadoRevelado = false;

  calcularSoma(): number {
    let indice = 13;
    let soma = 0;
    let k = 0;

    while (k < indice) {
      k = k + 1;
      soma = soma + k;
    }

    return soma;
  }

  revelarMagica(): void {
    this.animando = true;
    this.numerosVisiveis = [];

    let contador = 1;
    let intervalo = setInterval(() => {
      this.numerosVisiveis.push(contador);
      contador++;
      if (contador > 13) {
        clearInterval(intervalo);
        this.revelarResultado();
      }
    }, 500); 
  }

  revelarResultado(): void {
    this.resultadoRevelado = true;
  }
}
