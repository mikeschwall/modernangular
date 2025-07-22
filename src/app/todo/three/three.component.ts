import { AfterContentInit, Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'three',
  standalone: false,
  templateUrl: './three.component.html',
  styleUrl: './three.component.css'
})
export class ThreeComponent implements OnInit, AfterContentInit {

  mydata = "before view child";

  @ContentChild("mike")mike!:ElementRef;

  constructor() {

  }

  ngAfterContentInit(): void {
    this.mike.nativeElement.innerHTML="AFTER CONTENT CHILD"
  }

  ngOnInit(): void {
    
  }
}
