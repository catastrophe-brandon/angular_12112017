import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactFormComponent, PhoneValidatorDirective} from './contact-form/contact-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SignUpFormComponent} from './sign-up-form/sign-up-form.component';
import {ProductSupportFormComponent} from './product-support-form/product-support-form.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule
  ],
  declarations: [ContactFormComponent, SignUpFormComponent, PhoneValidatorDirective, ProductSupportFormComponent],
  exports: [ContactFormComponent, SignUpFormComponent, ProductSupportFormComponent]
})
export class FormDemoModule { }
