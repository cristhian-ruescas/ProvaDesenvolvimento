import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio5',
  templateUrl: './exercicio5.component.html',
  styleUrls: ['./exercicio5.component.css']
})
export class Exercicio5Component {
  inputString: string = '';
  resultadoInvertido: string = '';

  onInputChange(input: string): void {
    this.resultadoInvertido = input.split('').reverse().join('');
  }
}
