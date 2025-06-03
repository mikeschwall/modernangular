import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CourseService, Employee } from './todo/course.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit  {

  mydata?:Employee;

  constructor(private courseService:CourseService) {}

  ngOnInit(): void {
    
  }

  getdata(test:any) {
    this.courseService.getPerson(test).subscribe(item => this.mydata = item);
  }

  final(test:any) {
    console.log(test);
  }

}
