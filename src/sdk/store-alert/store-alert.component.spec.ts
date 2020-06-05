import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreAlertComponent } from './store-alert.component';

describe('StoreAlertComponent', () => {
  let component: StoreAlertComponent;
  let fixture: ComponentFixture<StoreAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreAlertComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
