import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaIndividualComponent } from './pagina-individual.component';

describe('PaginaIndividualComponent', () => {
  let component: PaginaIndividualComponent;
  let fixture: ComponentFixture<PaginaIndividualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaIndividualComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaginaIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
