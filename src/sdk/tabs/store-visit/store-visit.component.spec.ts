import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreVisitComponent } from './store-visit.component';

describe('StoreVisitComponent', () => {
  let component: StoreVisitComponent;
  let fixture: ComponentFixture<StoreVisitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreVisitComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
