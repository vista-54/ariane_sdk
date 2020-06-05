import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreAlertDetailComponent } from './store-alert-detail.component';

describe('StoreAlertDetailComponent', () => {
  let component: StoreAlertDetailComponent;
  let fixture: ComponentFixture<StoreAlertDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreAlertDetailComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreAlertDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
