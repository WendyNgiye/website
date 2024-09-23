import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecorPiecesComponent } from './decor-pieces.component';

describe('DecorPiecesComponent', () => {
  let component: DecorPiecesComponent;
  let fixture: ComponentFixture<DecorPiecesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DecorPiecesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecorPiecesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
