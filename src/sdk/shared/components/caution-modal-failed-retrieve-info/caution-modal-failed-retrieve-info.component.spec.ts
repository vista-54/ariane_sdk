import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CautionModalFailedRetrieveInfoComponent } from './caution-modal-failed-retrieve-info.component';

describe('CautionModalFailedRetrieveInfoComponent', () => {
  let component: CautionModalFailedRetrieveInfoComponent;
  let fixture: ComponentFixture<CautionModalFailedRetrieveInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CautionModalFailedRetrieveInfoComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CautionModalFailedRetrieveInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
