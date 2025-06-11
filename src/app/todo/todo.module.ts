import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { AlertComponent } from './alert/alert.component';
import { OneComponent } from './one/one.component';
import { InitComponent } from './init/init.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { CoursePipe } from './course.pipe';


@NgModule({
  declarations: [
    AlertComponent,
    OneComponent,
    InitComponent,
    TwoComponent,
    ThreeComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CoursePipe
  ],
  exports:[
    InitComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent
  ]
})
export class TodoModule { }
