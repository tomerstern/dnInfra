import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dynamicdialogsrc2testComponent } from './dynamicdialogsrc2test.component';

describe('Dynamicdialogsrc2testComponent', () => {
  let component: Dynamicdialogsrc2testComponent;
  let fixture: ComponentFixture<Dynamicdialogsrc2testComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dynamicdialogsrc2testComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dynamicdialogsrc2testComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
