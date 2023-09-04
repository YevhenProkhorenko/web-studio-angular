import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyAdvantagesComponent } from './company-advantages.component';

describe('CompanyAdvantagesComponent', () => {
  let component: CompanyAdvantagesComponent;
  let fixture: ComponentFixture<CompanyAdvantagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyAdvantagesComponent]
    });
    fixture = TestBed.createComponent(CompanyAdvantagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
