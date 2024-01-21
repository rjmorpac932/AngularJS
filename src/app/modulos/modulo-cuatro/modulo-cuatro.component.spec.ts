import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloCuatroComponent } from './modulo-cuatro.component';

describe('ModuloCuatroComponent', () => {
  let component: ModuloCuatroComponent;
  let fixture: ComponentFixture<ModuloCuatroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModuloCuatroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModuloCuatroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
