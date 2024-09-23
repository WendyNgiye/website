import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecorativePillowsComponent } from './decorative-pillows.component';

describe('DecorativePillowsComponent', () => {
  let component: DecorativePillowsComponent;
  let fixture: ComponentFixture<DecorativePillowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DecorativePillowsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecorativePillowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
