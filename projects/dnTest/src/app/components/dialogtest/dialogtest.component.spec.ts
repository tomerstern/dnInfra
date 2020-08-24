import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogtestComponent } from './dialogtest.component';

describe('DialogtestComponent', () => {
  let component: DialogtestComponent;
  let fixture: ComponentFixture<DialogtestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogtestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
