import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dynamicdialogsrc1testComponent } from './dynamicdialogsrc1test.component';

describe('Dynamicdialogsrc1testComponent', () => {
  let component: Dynamicdialogsrc1testComponent;
  let fixture: ComponentFixture<Dynamicdialogsrc1testComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dynamicdialogsrc1testComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dynamicdialogsrc1testComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
