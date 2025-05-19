import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { AlertComponent } from './alert/alert.component';
import { InitComponent } from './init/init.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OneComponent } from './one/one.component';
import { TodoPipe } from './todo.pipe';
import { TodoDirective } from './todo.directive';


@NgModule({
  declarations: [
    AlertComponent,
    InitComponent,
    TwoComponent,
    ThreeComponent,
    OneComponent,
    

  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TodoPipe,
    TodoDirective
    
  ],
  exports:[
    InitComponent,
    TwoComponent,
    ThreeComponent,
    OneComponent
  ]
})
export class TodoModule { }
