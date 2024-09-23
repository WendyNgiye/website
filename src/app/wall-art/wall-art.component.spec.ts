import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WallArtComponent } from './wall-art.component';

describe('WallArtComponent', () => {
  let component: WallArtComponent;
  let fixture: ComponentFixture<WallArtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WallArtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WallArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
