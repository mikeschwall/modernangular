import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-two',
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
    const obj = {
      title: 'foo',
      body: this.mygroup.value.food,
      userId: 1,
    }
    this.courseService.sendData(obj).subscribe((item:any) => alert(item.id));
  }

}
