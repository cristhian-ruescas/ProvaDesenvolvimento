import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioSelectorComponent } from './exercicio-selector.component';

describe('ExercicioSelectorComponent', () => {
  let component: ExercicioSelectorComponent;
  let fixture: ComponentFixture<ExercicioSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExercicioSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercicioSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
