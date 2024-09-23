import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarpetsMatsComponent } from './carpets-mats.component';

describe('CarpetsMatsComponent', () => {
  let component: CarpetsMatsComponent;
  let fixture: ComponentFixture<CarpetsMatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarpetsMatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarpetsMatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
