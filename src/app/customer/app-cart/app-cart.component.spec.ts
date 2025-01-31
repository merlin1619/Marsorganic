import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCartComponent } from './app-cart.component';

describe('AppCartComponent', () => {
  let component: AppCartComponent;
  let fixture: ComponentFixture<AppCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppCartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
