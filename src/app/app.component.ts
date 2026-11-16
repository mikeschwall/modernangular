import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit,AfterViewInit  {


  mydata:any;

  constructor() {

  }

  ngAfterViewInit(): void {
   
  }

  ngOnInit(): void {
  
    
  }

  getdata(test:any) {
    //alert(test)
  }

  final(test:any) {
    console.warn(test);
  }

}
