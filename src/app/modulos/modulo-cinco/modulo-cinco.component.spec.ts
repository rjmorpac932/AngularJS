import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloCincoComponent } from './modulo-cinco.component';

describe('ModuloCincoComponent', () => {
  let component: ModuloCincoComponent;
  let fixture: ComponentFixture<ModuloCincoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModuloCincoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModuloCincoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
