import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaltogocelPage } from './modaltogocel.page';

describe('ModaltogocelPage', () => {
  let component: ModaltogocelPage;
  let fixture: ComponentFixture<ModaltogocelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModaltogocelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModaltogocelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
