import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ColorToolModule } from './color-tool/color-tool.module';


import { AppComponent } from './app.component';
// import { ToolHeaderComponent } from './tool-header/tool-header.component';


@NgModule({
  declarations: [
    AppComponent,
    // ToolHeaderComponent
  ],
  imports: [
    BrowserModule, ColorToolModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
