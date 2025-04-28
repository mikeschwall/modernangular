import { AfterContentInit, Component, ContentChild, ElementRef, OnInit, signal } from '@angular/core';

@Component({
  selector: 'three',
  standalone: false,
  templateUrl: './three.component.html',
  styleUrl: './three.component.css'
})
export class ThreeComponent implements OnInit,AfterContentInit {

  mydata="before view child2";

  counter = signal(0);

  @ContentChild("mike") mike!:ElementRef;

  ngOnInit(): void {
    
  }

  ngAfterContentInit(): void {
    this.mike.nativeElement.innerHTML="AFTER CONTENT CHILD"
  }

  onClick() {
    console.log(this.counter());
    this.counter.update((oldval) => oldval + 1);
  }

}
