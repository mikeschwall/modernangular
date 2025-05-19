import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ThreeComponent } from './todo/three/three.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit  {

  mydata = "before content child";

  @ViewChild(ThreeComponent) three!:ThreeComponent;

  ngAfterViewInit(): void {
    this.three.mydata="AFTER VIEW CHILD";
  }

}
