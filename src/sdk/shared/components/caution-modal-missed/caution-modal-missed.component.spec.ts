import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CautionModalMissedComponent } from './caution-modal-missed.component';

describe('CautionModalMissedComponent', () => {
  let component: CautionModalMissedComponent;
  let fixture: ComponentFixture<CautionModalMissedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CautionModalMissedComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CautionModalMissedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
