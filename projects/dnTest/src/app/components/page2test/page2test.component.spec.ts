import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page2testComponent } from './page2test.component';

describe('Page2testComponent', () => {
  let component: Page2testComponent;
  let fixture: ComponentFixture<Page2testComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page2testComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page2testComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
