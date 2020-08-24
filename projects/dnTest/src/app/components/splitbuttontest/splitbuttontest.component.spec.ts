import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitbuttontestComponent } from './splitbuttontest.component';

describe('SplitbuttontestComponent', () => {
  let component: SplitbuttontestComponent;
  let fixture: ComponentFixture<SplitbuttontestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplitbuttontestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitbuttontestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
