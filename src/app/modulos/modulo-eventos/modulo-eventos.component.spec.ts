import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloEventosComponent } from './modulo-eventos.component';

describe('ModuloEventosComponent', () => {
  let component: ModuloEventosComponent;
  let fixture: ComponentFixture<ModuloEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModuloEventosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModuloEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
