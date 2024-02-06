import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioGetComponent } from './formulario-get.component';

describe('FormularioGetComponent', () => {
  let component: FormularioGetComponent;
  let fixture: ComponentFixture<FormularioGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioGetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
