import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DnInfraComponent } from './dn-infra.component';

describe('DnInfraComponent', () => {
  let component: DnInfraComponent;
  let fixture: ComponentFixture<DnInfraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DnInfraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DnInfraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
