import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloUnoComponent } from './modulo-uno.component';

describe('ModuloUnoComponent', () => {
  let component: ModuloUnoComponent;
  let fixture: ComponentFixture<ModuloUnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModuloUnoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModuloUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
