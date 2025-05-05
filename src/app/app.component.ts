import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CourseService } from './todo/course.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit,AfterViewInit {
  title = 'apr28';

  mydata:any;

  constructor(private courseService:CourseService) {}

  ngOnInit(): void {
    
  }

  getdata(test:any) {
    this.courseService.getEmployee(test).subscribe(item => this.mydata = item);
  }

ngAfterViewInit(): void {
}

final(test:any) {
  console.log(test);
}

}
