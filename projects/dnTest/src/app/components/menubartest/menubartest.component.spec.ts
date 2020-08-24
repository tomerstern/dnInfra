import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenubartestComponent } from './menubartest.component';

describe('MenubartestComponent', () => {
  let component: MenubartestComponent;
  let fixture: ComponentFixture<MenubartestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenubartestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenubartestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
