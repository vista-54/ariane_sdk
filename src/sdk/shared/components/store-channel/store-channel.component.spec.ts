import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreChannelComponent } from './store-channel.component';

describe('StoreChannelComponent', () => {
  let component: StoreChannelComponent;
  let fixture: ComponentFixture<StoreChannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreChannelComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
