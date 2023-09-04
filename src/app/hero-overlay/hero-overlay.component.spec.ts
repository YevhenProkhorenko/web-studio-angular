import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroOverlayComponent } from './hero-overlay.component';

describe('HeroOverlayComponent', () => {
  let component: HeroOverlayComponent;
  let fixture: ComponentFixture<HeroOverlayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroOverlayComponent]
    });
    fixture = TestBed.createComponent(HeroOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
