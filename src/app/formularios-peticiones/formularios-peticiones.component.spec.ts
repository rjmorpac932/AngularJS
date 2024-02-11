import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariosPeticionesComponent } from './formularios-peticiones.component';

describe('FormulariosPeticionesComponent', () => {
  let component: FormulariosPeticionesComponent;
  let fixture: ComponentFixture<FormulariosPeticionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulariosPeticionesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormulariosPeticionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
