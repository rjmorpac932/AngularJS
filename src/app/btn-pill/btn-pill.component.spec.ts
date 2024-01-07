import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnPillComponent } from './btn-pill.component';

describe('BtnPillComponent', () => {
  let component: BtnPillComponent;
  let fixture: ComponentFixture<BtnPillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnPillComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BtnPillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
