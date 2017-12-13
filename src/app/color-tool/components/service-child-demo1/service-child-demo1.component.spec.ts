import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceChildDemo1Component } from './service-child-demo1.component';

describe('ServiceChildDemo1Component', () => {
  let component: ServiceChildDemo1Component;
  let fixture: ComponentFixture<ServiceChildDemo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceChildDemo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceChildDemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
