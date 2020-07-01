import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsogrammTesterComponent } from './isogramm-tester.component';

describe('IsogrammTesterComponent', () => {
  let component: IsogrammTesterComponent;
  let fixture: ComponentFixture<IsogrammTesterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsogrammTesterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsogrammTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
