import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissingCarsComponent } from './missing-cars.component';

describe('MissingCarsComponent', () => {
  let component: MissingCarsComponent;
  let fixture: ComponentFixture<MissingCarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissingCarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissingCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
