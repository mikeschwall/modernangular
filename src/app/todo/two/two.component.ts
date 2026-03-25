import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CourseService } from '../course.service';

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
    
    this.courseService.senddata({title:this.mygroup.value.food,body:"test22",userId:"10"}).subscribe(() => console.log("sent"))
    alert(this.mygroup.value.food);
  }

}
