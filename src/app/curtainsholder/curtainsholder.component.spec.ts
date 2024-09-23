import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurtainsholderComponent } from './curtainsholder.component';

describe('CurtainsholderComponent', () => {
  let component: CurtainsholderComponent;
  let fixture: ComponentFixture<CurtainsholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CurtainsholderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurtainsholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
