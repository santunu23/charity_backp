import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetupdatePage } from './getupdate.page';

describe('GetupdatePage', () => {
  let component: GetupdatePage;
  let fixture: ComponentFixture<GetupdatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetupdatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetupdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
