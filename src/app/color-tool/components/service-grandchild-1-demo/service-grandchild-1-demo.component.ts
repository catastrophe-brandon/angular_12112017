import { Component, OnInit } from '@angular/core';
import { ColorsService } from '../../services/colors.service'

const altColorSvc = {
  all: function(someValue: string){
    console.log('alt color svc: ' + someValue);
  }
}

@Component({
  selector: 'service-grandchild-1-demo',
  templateUrl: './service-grandchild-1-demo.component.html',
  styleUrls: ['./service-grandchild-1-demo.component.css'],
})
export class ServiceGrandchild1DemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
