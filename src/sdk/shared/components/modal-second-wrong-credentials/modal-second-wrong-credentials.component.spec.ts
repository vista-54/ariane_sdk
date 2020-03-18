import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSecondWrongCredentialsComponent } from './modal-second-wrong-credentials.component';

describe('ModalSecondWrongCredentialsComponent', () => {
  let component: ModalSecondWrongCredentialsComponent;
  let fixture: ComponentFixture<ModalSecondWrongCredentialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalSecondWrongCredentialsComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSecondWrongCredentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
