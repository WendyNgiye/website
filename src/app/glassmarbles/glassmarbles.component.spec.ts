import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlassmarblesComponent } from './glassmarbles.component';

describe('GlassmarblesComponent', () => {
  let component: GlassmarblesComponent;
  let fixture: ComponentFixture<GlassmarblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GlassmarblesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlassmarblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
