import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirFreshenerComponent } from './air-freshener.component';

describe('AirFreshenerComponent', () => {
  let component: AirFreshenerComponent;
  let fixture: ComponentFixture<AirFreshenerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AirFreshenerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AirFreshenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
