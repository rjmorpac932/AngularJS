import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloSeisComponent } from './modulo-seis.component';

describe('ModuloSeisComponent', () => {
  let component: ModuloSeisComponent;
  let fixture: ComponentFixture<ModuloSeisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModuloSeisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModuloSeisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
