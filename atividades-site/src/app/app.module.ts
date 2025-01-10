import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FibonacciComponent } from './fibonacci/fibonacci.component';
import { ExercicioSelectorComponent } from './exercicio-selector/exercicio-selector.component';
import { ExercicioViewerComponent } from './exercicio-viewer/exercicio-viewer.component';
import { Exercicio1Component } from './exercicio1/exercicio1.component';
import { Exercicio3Component } from './exercicio3/exercicio3.component';
import { Exercicio4Component } from './exercicio4/exercicio4.component';
import { Exercicio5Component } from './exercicio5/exercicio5.component';

@NgModule({
  declarations: [
    AppComponent,
    FibonacciComponent,
    ExercicioSelectorComponent,
    ExercicioViewerComponent,
    Exercicio1Component,
    Exercicio3Component,
    Exercicio4Component,
    Exercicio5Component
  ],
  imports: [
    BrowserModule,
    FormsModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
