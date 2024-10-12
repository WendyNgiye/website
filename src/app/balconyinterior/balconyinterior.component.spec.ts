import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalconyinteriorComponent } from './balconyinterior.component';

describe('BalconyinteriorComponent', () => {
  let component: BalconyinteriorComponent;
  let fixture: ComponentFixture<BalconyinteriorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BalconyinteriorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BalconyinteriorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
