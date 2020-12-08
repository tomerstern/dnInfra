import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page4testComponent } from './page4test.component';

describe('Page4testComponent', () => {
  let component: Page4testComponent;
  let fixture: ComponentFixture<Page4testComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page4testComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page4testComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
