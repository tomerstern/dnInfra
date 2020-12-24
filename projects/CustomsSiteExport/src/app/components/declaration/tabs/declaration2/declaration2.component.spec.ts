import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Declaration2Component } from './declaration2.component';

describe('DeclarationTabDeclaration2Component', () => {
  let component: Declaration2Component;
  let fixture: ComponentFixture<Declaration2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Declaration2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Declaration2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
