import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page0testComponent } from './page0test.component';

describe('Page0testComponent', () => {
  let component: Page0testComponent;
  let fixture: ComponentFixture<Page0testComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page0testComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page0testComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
