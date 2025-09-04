import { AfterContentInit, Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'three',
  standalone: false,
  templateUrl: './three.component.html',
  styleUrl: './three.component.css'
})
export class ThreeComponent implements AfterContentInit {

  mydata= "before init view";

  @ContentChild("mike") mike!:ElementRef;

  ngAfterContentInit(): void {
    this.mike.nativeElement.innerHTML="AFTER CONTENT CHILD"
  }

}
