import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { TodoModule } from './todo/todo.module';



const routes:Routes = [];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({})
    
],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
