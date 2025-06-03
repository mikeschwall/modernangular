import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService, Employee } from '../course.service';

@Component({
  selector: 'two',
  standalone: false,
  templateUrl: './two.component.html',
  styleUrl: './two.component.css'
})
export class TwoComponent implements OnInit {

  mydata:any;
  mydata2?:Employee;

  constructor(private route:ActivatedRoute,private courseService:CourseService) {}

  ngOnInit(): void {
    this.route.params.subscribe(item => this.mydata = item["id"]);
    this.courseService.getPerson(this.mydata).subscribe(item => this.mydata2 = item);
    
  }
}
