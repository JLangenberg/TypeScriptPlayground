import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StringReverserComponent } from './string-reverser.component';

describe('StringReverserComponent', () => {
  let component: StringReverserComponent;
  let fixture: ComponentFixture<StringReverserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StringReverserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StringReverserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
