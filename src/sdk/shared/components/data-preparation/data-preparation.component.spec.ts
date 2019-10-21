import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataPreparationComponent } from './data-preparation.component';

describe('DataPreparationComponent', () => {
  let component: DataPreparationComponent;
  let fixture: ComponentFixture<DataPreparationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataPreparationComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataPreparationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
