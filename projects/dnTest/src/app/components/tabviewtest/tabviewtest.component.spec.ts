import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabviewtestComponent } from './tabviewtest.component';

describe('TabviewtestComponent', () => {
  let component: TabviewtestComponent;
  let fixture: ComponentFixture<TabviewtestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabviewtestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabviewtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
