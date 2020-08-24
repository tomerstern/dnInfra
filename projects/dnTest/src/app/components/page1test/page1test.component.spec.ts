import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page1testComponent } from './page1test.component';

describe('Page1testComponent', () => {
  let component: Page1testComponent;
  let fixture: ComponentFixture<Page1testComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page1testComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page1testComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
