import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicdialogtestComponent } from './dynamicdialogtest.component';

describe('DynamicdialogtestComponent', () => {
  let component: DynamicdialogtestComponent;
  let fixture: ComponentFixture<DynamicdialogtestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicdialogtestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicdialogtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
