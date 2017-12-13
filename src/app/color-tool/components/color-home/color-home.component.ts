import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {ColorsService} from '../../services/colors.service';
import { DataTableConfig } from '../../../shared-module/shared-module.module';
import { Color } from '../../models/color';

@Component({
  selector: 'color-home',
  templateUrl: './color-home.component.html',
  styleUrls: ['./color-home.component.css']
})
export class ColorHomeComponent  implements OnInit {

  public headerText = 'Color Tool';

  public colorTableConfig: DataTableConfig = {
    cols: [
      { header: 'Name', field: 'name' },
      { header: 'HexCode', field: 'hexCode' },
    ]
  };

  public colors: Color[] = [
  ];

  public colorsSvc: ColorsService;

  public ngOnInit() {
    this.colorsSvc.all().then(colors => this.colors = colors);
  }

  constructor(private colorSvc: ColorsService) {
    this.colorsSvc = colorSvc;
  }

  public addColor(newColor: Color) {

    this.colors = [ ...this.colors, {
      id: Math.max(...this.colors.map(c => c.id)) + 1,
      ...newColor,
    }];
  }

  public saveColor(editColor: Color) {

    const editIndex = this.colors.findIndex(c =>
      c.id === editColor.id);

    this.colors = [
      ...this.colors.slice(0, editIndex),
      editColor,
      ...this.colors.slice(editIndex + 1),
    ];
  }

  public deleteColor(colorId: number) {
    // delete the color from the service
    console.log('deleting color ' + colorId);
    console.log('colorsSvc is ' + this.colorsSvc);
    this.colorsSvc.deleteColor(colorId).then(() => {
      this.colorsSvc.all().then(colors => this.colors = colors);
    });
  }

}
