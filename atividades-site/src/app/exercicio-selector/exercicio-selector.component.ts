import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-exercicio-selector',
  templateUrl: './exercicio-selector.component.html',
  styleUrls: ['./exercicio-selector.component.css']
})
export class ExercicioSelectorComponent {
  @Output() exercicioSelecionado = new EventEmitter<string>();

  onExercicioChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const exercicio = selectElement.value;
    this.exercicioSelecionado.emit(exercicio);
  }
}
