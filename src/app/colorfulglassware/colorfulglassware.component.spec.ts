import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorfulglasswareComponent } from './colorfulglassware.component';

describe('ColorfulglasswareComponent', () => {
  let component: ColorfulglasswareComponent;
  let fixture: ComponentFixture<ColorfulglasswareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ColorfulglasswareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorfulglasswareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
