import { Component, OnInit } from '@angular/core';

const altColorSvc = {
  all: function(someValue: string) {
    console.log('alt color svc'+ someValue);
  }
}

@Component({
  selector: 'service-child-demo1',
  templateUrl: './service-child-demo1.component.html',
  styleUrls: ['./service-child-demo1.component.css'],
})
export class ServiceChildDemo1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
