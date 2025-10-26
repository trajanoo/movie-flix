import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordCard } from './forgot-password-card';

describe('ForgotPasswordCard', () => {
  let component: ForgotPasswordCard;
  let fixture: ComponentFixture<ForgotPasswordCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForgotPasswordCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgotPasswordCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
