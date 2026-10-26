import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-one',
  standalone: false,
  templateUrl: './one.component.html',
  styleUrl: './one.component.css'
})
export class OneComponent implements OnInit{

  mydata:any;
  @Input() myinput = false;
  @Output() myoutput = new EventEmitter<any>();

  constructor(private courseService:CourseService) {

  }

  ngOnInit(): void {
    this.courseService.getData().subscribe(item => this.mydata = item);
  }

  onClick(id:number) {
    console.log(id)
    this.myoutput.emit(id);
  }

}
