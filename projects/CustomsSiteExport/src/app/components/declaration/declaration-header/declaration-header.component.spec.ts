import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclarationHeaderComponent } from './declaration-header.component';

describe('DeclarationHeaderComponent', () => {
  let component: DeclarationHeaderComponent;
  let fixture: ComponentFixture<DeclarationHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeclarationHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclarationHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
