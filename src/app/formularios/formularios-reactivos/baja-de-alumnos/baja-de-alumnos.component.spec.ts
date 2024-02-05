import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioBajaComponent } from './baja-de-alumnos.component';

describe('FormularioBajaComponent', () => {
  let component: FormularioBajaComponent;
  let fixture: ComponentFixture<FormularioBajaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioBajaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioBajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
