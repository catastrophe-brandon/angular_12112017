import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceGrandchild1DemoComponent } from './service-grandchild-1-demo.component';

describe('ServiceGrandchild1DemoComponent', () => {
  let component: ServiceGrandchild1DemoComponent;
  let fixture: ComponentFixture<ServiceGrandchild1DemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceGrandchild1DemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceGrandchild1DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
