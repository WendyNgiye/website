import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BathroominteriorComponent } from './bathroominterior.component';

describe('BathroominteriorComponent', () => {
  let component: BathroominteriorComponent;
  let fixture: ComponentFixture<BathroominteriorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BathroominteriorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BathroominteriorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
