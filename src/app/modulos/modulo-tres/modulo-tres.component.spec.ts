import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloTresComponent } from './modulo-tres.component';

describe('ModuloTresComponent', () => {
  let component: ModuloTresComponent;
  let fixture: ComponentFixture<ModuloTresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModuloTresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModuloTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
