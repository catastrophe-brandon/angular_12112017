import { Component, OnInit } from '@angular/core';
import {ColorsService} from '../../services/colors.service'

@Component({
  selector: 'service-demo',
  templateUrl: './service-demo.component.html',
  styleUrls: ['./service-demo.component.css'],
  providers: [ ColorsService ],
})
export class ServiceDemoComponent implements OnInit {

  constructor(private colorSvc: ColorsService) {
      this.colorSvc = colorSvc;
  }

  ngOnInit() {
    this.colorSvc.all().then(colors => console.log(colors));
  }

}
