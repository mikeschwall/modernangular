import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'two',
  standalone: false,
  templateUrl: './two.component.html',
  styleUrl: './two.component.css'
})
export class TwoComponent implements OnInit {

  mygroup!:FormGroup;

  constructor(private courseService:CourseService) {

  }

  ngOnInit(): void {
    this.mygroup = new FormGroup({
      food: new FormControl(null)
    })
  }

  onClick() {
    this.courseService.senddata(this.mygroup.value.food).subscribe(item => console.log(item));
  }

}
