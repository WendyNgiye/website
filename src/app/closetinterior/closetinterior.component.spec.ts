import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosetinteriorComponent } from './closetinterior.component';

describe('ClosetinteriorComponent', () => {
  let component: ClosetinteriorComponent;
  let fixture: ComponentFixture<ClosetinteriorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClosetinteriorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClosetinteriorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
