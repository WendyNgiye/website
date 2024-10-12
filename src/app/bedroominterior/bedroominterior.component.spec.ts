import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BedroominteriorComponent } from './bedroominterior.component';

describe('BedroominteriorComponent', () => {
  let component: BedroominteriorComponent;
  let fixture: ComponentFixture<BedroominteriorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BedroominteriorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BedroominteriorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
