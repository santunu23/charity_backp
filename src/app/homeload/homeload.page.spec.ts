import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeloadPage } from './homeload.page';

describe('HomeloadPage', () => {
  let component: HomeloadPage;
  let fixture: ComponentFixture<HomeloadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeloadPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeloadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
