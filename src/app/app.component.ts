import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CourseService } from './todo/course.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit,AfterViewInit  {

  mydata:any;
  constructor(private courseService:CourseService) {

  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    
  }

  getData(id:number) {
    this.courseService.getPerson(id).subscribe(item => this.mydata = item);
  }

  final(test:any) {
    console.log(test);
  }

}
