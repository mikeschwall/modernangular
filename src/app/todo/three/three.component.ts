import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment } from '../store/actions';

@Component({
  selector: 'three',
  standalone: false,
  templateUrl: './three.component.html',
  styleUrl: './three.component.css'
})
export class ThreeComponent implements OnInit {

  @Input() myinput = false;
  @Output() myoutput = new EventEmitter<boolean>();
  count$;

  constructor(private store:Store<{counter:number}>){
    this.count$ = this.store.select("counter");
    console.log(this.count$);
  }

  ngOnInit(): void {
    
  }

  onClick() {
    this.myinput = !this.myinput;
    this.myoutput.emit(this.myinput);
  }

  incrementClick() {
    this.store.dispatch(increment(1));
  }
}
