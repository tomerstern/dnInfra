import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Open } from './open.component';

describe('DeclarationTabOpenComponent', () => {
  let component: Open;
  let fixture: ComponentFixture<Open>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Open ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Open);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
