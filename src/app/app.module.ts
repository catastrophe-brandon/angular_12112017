import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ColorToolModule } from './color-tool/color-tool.module';
import { DemoToolModule } from './demo-tool/demo-tool.module';

import { AppComponent } from './app.component';
import {FormDemoModule} from './form-demo/form-demo.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, ColorToolModule, DemoToolModule, FormDemoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
