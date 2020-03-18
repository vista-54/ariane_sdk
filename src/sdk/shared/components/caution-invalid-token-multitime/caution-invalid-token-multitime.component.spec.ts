import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CautionInvalidTokenMultitimeComponent } from './caution-invalid-token-multitime.component';

describe('CautionInvalidTokenMultitimeComponent', () => {
  let component: CautionInvalidTokenMultitimeComponent;
  let fixture: ComponentFixture<CautionInvalidTokenMultitimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CautionInvalidTokenMultitimeComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CautionInvalidTokenMultitimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
