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
  finalArray:any[] = [];

  constructor(private courseService:CourseService) {

  }

  ngOnInit(): void {
    this.mygroup = new FormGroup({
      food: new FormControl(null)
    })
  }

  handleSubmit = () => {
    this.courseService.getfire().subscribe((object:Record<any,any>) => {
      for(let key in object) {
        console.log(object[key]);
        this.finalArray.push(object[key]);
      }
    } )
  }

  onClick() {
    this.courseService.sendData(this.mygroup.value.food).subscribe(() => console.log("sent"));
    setTimeout(() => {
      this.finalArray = [];
      this.handleSubmit();
    }, 500);
  }
}
