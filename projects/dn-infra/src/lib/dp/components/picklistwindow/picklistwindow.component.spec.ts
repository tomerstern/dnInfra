import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicklistWindowComponent } from './picklistwindow.component';

describe('PicklistWindowComponent', () => {
  let component: PicklistWindowComponent;
  let fixture: ComponentFixture<PicklistWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicklistWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicklistWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
