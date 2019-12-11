import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WellDoneComponent } from './well-done.component';

describe('WellDoneComponent', () => {
  let component: WellDoneComponent;
  let fixture: ComponentFixture<WellDoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WellDoneComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WellDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
