import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  exercicioAtual: string = 'exercicio1';

  onExercicioSelecionado(exercicio: string) {
    this.exercicioAtual = exercicio;
  }
}
