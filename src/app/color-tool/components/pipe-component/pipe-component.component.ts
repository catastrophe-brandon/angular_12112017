import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'pipe-component',
  templateUrl: './pipe-component.component.html',
  styleUrls: ['./pipe-component.component.css']
})
export class PipeComponentComponent implements OnInit {


  nums = [2, 4, 78, 98, 23, 27 ];

  public numberForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.numberForm = this.fb.group({
      inputNumberInput: '',
    });
  }

  ngOnInit() {
  }

  public handleSaveClick() {
   // this.nums = this.nums.push(Number(this.numberForm.value.inputNumberInput));
   this.nums = this.nums.concat([this.numberForm.value.inputNumberInput]);
  }
}
