import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModuleModule } from '../shared-module/shared-module.module';
import { ColorHomeComponent } from './components/color-home/color-home.component';
import { ColorFormComponent } from './components/color-form/color-form.component';
import { MyUpperCasePipe } from './pipes/my-upper-case.pipe';
import { MyAppendPipe } from './pipes/my-append.pipe';
import { PipeComponentComponent } from './components/pipe-component/pipe-component.component';
import { SumArrayPipe } from './pipes/sum-array.pipe';
import { MeanArrayPipe } from './pipes/mean-array.pipe';
import { ServiceDemoComponent } from './components/service-demo/service-demo.component';
import { ServiceChildDemo1Component } from './components/service-child-demo1/service-child-demo1.component';
import { ServiceChildDemo2Component } from './components/service-child-demo2/service-child-demo2.component';
import { ServiceGrandchild1DemoComponent } from './components/service-grandchild-1-demo/service-grandchild-1-demo.component';
import { ColorsService } from './services/colors.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, SharedModuleModule,
    HttpClientModule
  ],
  declarations: [ColorHomeComponent, ColorFormComponent, MyUpperCasePipe,
    MyAppendPipe, PipeComponentComponent, SumArrayPipe, MeanArrayPipe,
    ServiceDemoComponent,
    ServiceChildDemo1Component,
    ServiceChildDemo2Component,
    ServiceGrandchild1DemoComponent],
  exports: [ColorHomeComponent, ServiceDemoComponent],
  providers: [ { provide: ColorsService, useClass: ColorsService } ],
})
export class ColorToolModule { }
