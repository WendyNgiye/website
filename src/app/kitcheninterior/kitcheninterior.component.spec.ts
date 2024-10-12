import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitcheninteriorComponent } from './kitcheninterior.component';

describe('KitcheninteriorComponent', () => {
  let component: KitcheninteriorComponent;
  let fixture: ComponentFixture<KitcheninteriorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KitcheninteriorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KitcheninteriorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
