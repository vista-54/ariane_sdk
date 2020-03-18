import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CautionModalThirtyInactiveComponent } from './caution-modal-thirty-inactive.component';

describe('CautionModalThirtyInactiveComponent', () => {
  let component: CautionModalThirtyInactiveComponent;
  let fixture: ComponentFixture<CautionModalThirtyInactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CautionModalThirtyInactiveComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CautionModalThirtyInactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
