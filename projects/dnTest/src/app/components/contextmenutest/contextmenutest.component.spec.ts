import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextmenutestComponent } from './contextmenutest.component';

describe('ContextmenutestComponent', () => {
  let component: ContextmenutestComponent;
  let fixture: ComponentFixture<ContextmenutestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContextmenutestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContextmenutestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
