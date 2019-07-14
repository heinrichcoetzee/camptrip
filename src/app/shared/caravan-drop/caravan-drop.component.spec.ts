import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaravanDropComponent } from './caravan-drop.component';

describe('CaravanDropComponent', () => {
  let component: CaravanDropComponent;
  let fixture: ComponentFixture<CaravanDropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaravanDropComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaravanDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
