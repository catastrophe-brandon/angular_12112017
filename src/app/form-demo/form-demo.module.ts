import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsModule} from '@angular/forms';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [ContactFormComponent, SignUpFormComponent],
  exports: [ContactFormComponent, SignUpFormComponent]
})
export class FormDemoModule { }
