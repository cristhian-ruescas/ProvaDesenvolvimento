import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioViewerComponent } from './exercicio-viewer.component';

describe('ExercicioViewerComponent', () => {
  let component: ExercicioViewerComponent;
  let fixture: ComponentFixture<ExercicioViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExercicioViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercicioViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
