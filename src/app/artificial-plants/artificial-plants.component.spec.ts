import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtificialPlantsComponent } from './artificial-plants.component';

describe('ArtificialPlantsComponent', () => {
  let component: ArtificialPlantsComponent;
  let fixture: ComponentFixture<ArtificialPlantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArtificialPlantsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtificialPlantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
