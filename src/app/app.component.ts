import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ThreeComponent } from './todo/three/three.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit,AfterViewInit  {

  @ViewChild(ThreeComponent) three!:ThreeComponent;
  mydata = "before content child"
  
  constructor() {

  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.three.mydata = "AFTER CONTENT INIT"

  }

  

  getdata(test:any) {


  }

final(test:any) {
console.log(test)
}

}
