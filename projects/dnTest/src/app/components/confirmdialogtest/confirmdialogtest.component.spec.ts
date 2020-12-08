import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmdialogtestComponent } from './confirmdialogtest.component';

describe('ConfirmdialogtestComponent', () => {
  let component: ConfirmdialogtestComponent;
  let fixture: ComponentFixture<ConfirmdialogtestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmdialogtestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmdialogtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
