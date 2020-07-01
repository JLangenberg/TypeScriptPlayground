import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiamondFabricatorComponent } from './diamond-fabricator.component';

describe('DiamondFabricatorComponent', () => {
  let component: DiamondFabricatorComponent;
  let fixture: ComponentFixture<DiamondFabricatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiamondFabricatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiamondFabricatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
