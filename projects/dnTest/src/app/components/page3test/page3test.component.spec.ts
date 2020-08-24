import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page3testComponent } from './page3test.component';

describe('Page3testComponent', () => {
  let component: Page3testComponent;
  let fixture: ComponentFixture<Page3testComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page3testComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page3testComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
