import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioJMCComponent } from './formulario-jmc.component';

describe('FormularioJMCComponent', () => {
  let component: FormularioJMCComponent;
  let fixture: ComponentFixture<FormularioJMCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioJMCComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioJMCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
