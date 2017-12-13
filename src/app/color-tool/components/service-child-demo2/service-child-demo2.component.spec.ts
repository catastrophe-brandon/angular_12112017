import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceChildDemo2Component } from './service-child-demo2.component';

describe('ServiceChildDemo2Component', () => {
  let component: ServiceChildDemo2Component;
  let fixture: ComponentFixture<ServiceChildDemo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceChildDemo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceChildDemo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
