import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalmoovPage } from './modalmoov.page';

describe('ModalmoovPage', () => {
  let component: ModalmoovPage;
  let fixture: ComponentFixture<ModalmoovPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalmoovPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalmoovPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
