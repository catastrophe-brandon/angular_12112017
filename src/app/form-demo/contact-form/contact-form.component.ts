import {Component, Directive, OnInit} from '@angular/core';
import {AbstractControl, FormGroup, FormBuilder, FormControl, Validators, NG_VALIDATORS} from '@angular/forms';

const phoneValidator = ( c: AbstractControl) => {
  if (c.value == null || String(c.value).length === 0) {
    return null;
  }

  const re = new RegExp('');

  if (re.test(c.value)) {
    return null;
  } else {
    return {
      phone: true,
    };
  }
};

@Directive({
  selector: 'input[type=tel][ngModel]',
  providers: [
    {provide: NG_VALIDATORS, useValue: phoneValidator, multi: true}
  ]
})
export class PhoneValidatorDirective {}

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
      'phoneInput': ['', { validators: [phoneValidator] } ],
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
