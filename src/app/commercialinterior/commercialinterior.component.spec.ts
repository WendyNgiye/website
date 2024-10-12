import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialinteriorComponent } from './commercialinterior.component';

describe('CommercialinteriorComponent', () => {
  let component: CommercialinteriorComponent;
  let fixture: ComponentFixture<CommercialinteriorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommercialinteriorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommercialinteriorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
