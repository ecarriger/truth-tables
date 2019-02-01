import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputStatementComponent } from './input-statement.component';

describe('InputStatementComponent', () => {
  let component: InputStatementComponent;
  let fixture: ComponentFixture<InputStatementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputStatementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
