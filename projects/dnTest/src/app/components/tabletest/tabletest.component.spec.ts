import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabletestComponent } from './tabletest.component';

describe('TabletestComponent', () => {
  let component: TabletestComponent;
  let fixture: ComponentFixture<TabletestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabletestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabletestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
