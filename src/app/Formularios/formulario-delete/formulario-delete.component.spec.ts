import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioDeleteComponent } from './formulario-delete.component';

describe('FormularioDeleteComponent', () => {
  let component: FormularioDeleteComponent;
  let fixture: ComponentFixture<FormularioDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioDeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
