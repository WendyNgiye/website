import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutdoorinteriorComponent } from './outdoorinterior.component';

describe('OutdoorinteriorComponent', () => {
  let component: OutdoorinteriorComponent;
  let fixture: ComponentFixture<OutdoorinteriorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OutdoorinteriorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutdoorinteriorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
