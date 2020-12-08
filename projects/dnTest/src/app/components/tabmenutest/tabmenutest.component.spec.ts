import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabmenutestComponent } from './tabmenutest.component';

describe('TabmenutestComponent', () => {
  let component: TabmenutestComponent;
  let fixture: ComponentFixture<TabmenutestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabmenutestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabmenutestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
