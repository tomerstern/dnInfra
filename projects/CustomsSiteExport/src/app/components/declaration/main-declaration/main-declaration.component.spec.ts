import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDeclarationComponent } from './main-declaration.component';

describe('DeclarationComponent', () => {
  let component: MainDeclarationComponent;
  let fixture: ComponentFixture<MainDeclarationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainDeclarationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDeclarationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
