import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloDosComponent } from './modulo-dos.component';

describe('ModuloDosComponent', () => {
  let component: ModuloDosComponent;
  let fixture: ComponentFixture<ModuloDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModuloDosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModuloDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
