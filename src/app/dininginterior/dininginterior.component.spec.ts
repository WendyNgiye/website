import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DininginteriorComponent } from './dininginterior.component';

describe('DininginteriorComponent', () => {
  let component: DininginteriorComponent;
  let fixture: ComponentFixture<DininginteriorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DininginteriorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DininginteriorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
