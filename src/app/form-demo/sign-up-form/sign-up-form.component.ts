import {Component, Directive, OnInit} from '@angular/core';
import {AbstractControl, FormControl, NG_VALIDATORS, Validators} from '@angular/forms';


const emailValidator = ( c: AbstractControl) => {
  console.log('emailValidator called');
  if (c.value == null || String(c.value).length === 0) {
    return null;
  }

  const expression = '^[\\w-]+(?:\\.[\\w-]+)*@(?:[\\w-]+\\.)+[a-zA-Z]{2,7}$';
  const re = new RegExp(expression);

  if (re.test(c.value)) {
    return null;
  } else {
    return {
      email: true,
    };
  }
};

@Directive({
  selector: '[id=email-input]',
  providers: [
    {provide: NG_VALIDATORS, useValue: emailValidator, multi: true}
  ]
})
export class EmailValidatorDirective {}

@Component({
  selector: 'sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {

  public states = ['Oceania', 'Pacifica', 'Rapture'];
  // public email = '';
  public fullName = '';
  public state = '';
  public phone = '';
  public newMember = false;

  public emailInput = new FormControl('', Validators.required);
  // public lastNameInput = new FormControl('', Validators.required);

  constructor() { }

  ngOnInit() {
  }

}
