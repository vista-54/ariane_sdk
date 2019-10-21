import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutModalComponent } from './about-modal.component';

describe('AboutModalComponent', () => {
  let component: AboutModalComponent;
  let fixture: ComponentFixture<AboutModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutModalComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
