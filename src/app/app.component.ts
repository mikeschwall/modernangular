import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ThreeComponent } from './todo/three/three.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit,AfterViewInit  {

mydata = "before content inti"
@ViewChild(ThreeComponent) three!:ThreeComponent;
  
  constructor() {

  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.three.mydata="AFTER VIEW ININ"
  }

  

  getdata(test:any) {

  }

final(test:any) {

}

}
