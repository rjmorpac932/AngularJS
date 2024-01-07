import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnSnakeComponent } from './btn-snake.component';

describe('BtnSnakeComponent', () => {
  let component: BtnSnakeComponent;
  let fixture: ComponentFixture<BtnSnakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnSnakeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BtnSnakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
