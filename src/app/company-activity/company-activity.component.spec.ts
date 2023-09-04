import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyActivityComponent } from './company-activity.component';

describe('CompanyActivityComponent', () => {
  let component: CompanyActivityComponent;
  let fixture: ComponentFixture<CompanyActivityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyActivityComponent]
    });
    fixture = TestBed.createComponent(CompanyActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
