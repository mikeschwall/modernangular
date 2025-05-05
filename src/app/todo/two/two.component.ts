import { Component, OnInit } from '@angular/core';
import { CourseService, Employee } from '../course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'two',
  standalone: false,
  templateUrl: './two.component.html',
  styleUrl: './two.component.css'
})
export class TwoComponent implements OnInit {

  myroute:any;
  mydata?:Employee;

  constructor(private courseService:CourseService,private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(item => this.myroute = item["id"]);
    this.courseService.getEmployee(this.myroute).subscribe(item => this.mydata = item);
  }

}
