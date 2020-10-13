import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicdialogComponent } from './dynamicdialog.component';

describe('DynamicdialogComponent', () => {
  let component: DynamicdialogComponent;
  let fixture: ComponentFixture<DynamicdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
