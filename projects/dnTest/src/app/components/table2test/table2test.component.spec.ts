import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Table2testComponent } from './table2test.component';

describe('Table2testComponent', () => {
  let component: Table2testComponent;
  let fixture: ComponentFixture<Table2testComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Table2testComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Table2testComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
