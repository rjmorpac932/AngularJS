import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularAnimationComponent } from './angular-animation.component';

describe('AngularAnimationComponent', () => {
  let component: AngularAnimationComponent;
  let fixture: ComponentFixture<AngularAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularAnimationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngularAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
