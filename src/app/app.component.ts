import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit,AfterViewInit  {



mycontent = "before content child"

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
  }


  getdata(test:any) {
    
  }

final(test:any) {

}

}
