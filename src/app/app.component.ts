import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit  {

  constructor() {}

  ngOnInit(): void {
    
  }

  getdata(test:any) {
    console.log(test);
  }
  

}
