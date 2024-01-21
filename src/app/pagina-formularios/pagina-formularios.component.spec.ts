import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaFormulariosComponent } from './pagina-formularios.component';

describe('PaginaFormulariosComponent', () => {
  let component: PaginaFormulariosComponent;
  let fixture: ComponentFixture<PaginaFormulariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaFormulariosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaginaFormulariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
