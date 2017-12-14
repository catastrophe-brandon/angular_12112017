import { Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  // public firstNameInput = new FormControl('', Validators.required);
  // public lastNameInput = new FormControl('', Validators.required);

  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    // this.form.addControl('firstNameInput', new FormControl(''));
    // this.form.addControl('lastNameInput', new FormControl(''));
    this.form = this.fb.group({
      'firstNameInput': ['', { validators: [Validators.required] }],
      'lastNameInput': '',
       addressGroup: this.fb.group({
         streetInput: '',
         cityInput: ''
       })});
  }

  ngOnInit() {
  }

  public showFormValues() {
    console.dir(this.form.value);
  }

}
