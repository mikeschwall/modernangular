import { AfterContentInit, Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'three',
  standalone: false,
  templateUrl: './three.component.html',
  styleUrl: './three.component.css'
})
export class ThreeComponent implements OnInit, AfterContentInit {

  mydata = "before content init";
  @ContentChild("mike") mike!:ElementRef;

  constructor() {

  }

  ngOnInit(): void {
    
  }

  ngAfterContentInit(): void {
    this.mike.nativeElement.innerHTML="AFTER TEST INIT"
  }

}
