import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateTablePage } from './generate-table.page';

describe('GenerateTablePage', () => {
  let component: GenerateTablePage;
  let fixture: ComponentFixture<GenerateTablePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GenerateTablePage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateTablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
