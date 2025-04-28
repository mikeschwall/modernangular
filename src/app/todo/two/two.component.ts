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
  foodarray!:any[];

  constructor(private courseService:CourseService) {}

  ngOnInit(): void {
    this.mygroup = new FormGroup({
      food: new FormControl(null)
    })
  }

  handlepost = () => {
    this.courseService.getfire().subscribe((object:Record<any,any>) => {
      for (let key in object) {
        this.foodarray.push(object[key]);
      }
    })
  }

  onClick() {
    this.courseService.senddata(this.mygroup.value.food).subscribe(() => console.log("sent"));
    setTimeout(() => {
      this.foodarray = [];
      this.handlepost();
    }, 500);
  }

}
