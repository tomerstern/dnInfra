import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalfunctionstestComponent } from './globalfunctionstest.component';

describe('GlobalfunctionstestComponent', () => {
  let component: GlobalfunctionstestComponent;
  let fixture: ComponentFixture<GlobalfunctionstestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalfunctionstestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalfunctionstestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
