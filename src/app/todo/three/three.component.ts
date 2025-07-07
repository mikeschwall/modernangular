import { AfterContentInit, Component, ContentChild, ElementRef, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment } from '../store/actions';

@Component({
  selector: 'three',
  standalone: false,
  templateUrl: './three.component.html',
  styleUrl: './three.component.css'
})
export class ThreeComponent implements OnInit {

  mydata = "before view child";

  @ContentChild("mike") mike!:ElementRef;

  count$;
  

  constructor(private store:Store<{counter:number}>) {
    this.count$ = this.store.select("counter");
  }

  ngOnInit(): void {
    
  }

  onClick() {
    this.store.dispatch(increment(1))
  }

  
}
