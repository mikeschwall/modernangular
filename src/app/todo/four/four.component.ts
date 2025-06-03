import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment } from '../../actions';

@Component({
  selector: 'four',
  standalone: false,
  templateUrl: './four.component.html',
  styleUrl: './four.component.css'
})
export class FourComponent implements OnInit {

  counter$:Observable<number>;

  constructor(private store:Store<{counter:number}>) {
    this.counter$ = this.store.select('counter');
  }

  ngOnInit(): void {
    
  }

  clickIncrement() {
    this.store.dispatch(increment(1));
  }

}
