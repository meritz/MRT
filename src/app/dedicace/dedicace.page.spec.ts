import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DedicacePage } from './dedicace.page';

describe('DedicacePage', () => {
  let component: DedicacePage;
  let fixture: ComponentFixture<DedicacePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DedicacePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DedicacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
