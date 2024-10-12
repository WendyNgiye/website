import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SittingroomComponent } from './sittingroom.component';

describe('SittingroomComponent', () => {
  let component: SittingroomComponent;
  let fixture: ComponentFixture<SittingroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SittingroomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SittingroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
