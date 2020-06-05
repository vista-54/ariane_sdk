import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplyDeviceErrorModalComponent } from './multiply-device-error-modal.component';

describe('MultiplyDeviceErrorModalComponent', () => {
  let component: MultiplyDeviceErrorModalComponent;
  let fixture: ComponentFixture<MultiplyDeviceErrorModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiplyDeviceErrorModalComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplyDeviceErrorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
