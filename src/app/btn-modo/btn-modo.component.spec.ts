import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnModoComponent } from './btn-modo.component';

describe('BtnModoComponent', () => {
  let component: BtnModoComponent;
  let fixture: ComponentFixture<BtnModoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnModoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BtnModoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
