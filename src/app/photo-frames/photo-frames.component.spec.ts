import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoFramesComponent } from './photo-frames.component';

describe('PhotoFramesComponent', () => {
  let component: PhotoFramesComponent;
  let fixture: ComponentFixture<PhotoFramesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotoFramesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoFramesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
