import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { TodoModule } from './todo/todo.module';
import { countReducer } from './todo/reducers/countreducer';

const routes:Routes = [];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoModule,
    StoreModule.forRoot({counter: countReducer}),
    RouterModule.forRoot(routes),
    
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
