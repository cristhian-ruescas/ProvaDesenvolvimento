import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-exercicio-viewer',
  templateUrl: './exercicio-viewer.component.html',
  styleUrls: ['./exercicio-viewer.component.css']
})
export class ExercicioViewerComponent {
  @Input() exercicioAtual: string = '';
}
