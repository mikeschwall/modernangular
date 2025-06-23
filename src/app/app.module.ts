import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { TodoModule } from './todo/todo.module';
import { counterReducer } from './todo/store/reducers';


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
    StoreModule.forRoot({counter:counterReducer}),
    
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
