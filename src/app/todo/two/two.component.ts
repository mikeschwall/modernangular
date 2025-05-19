import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TodoService } from '../course.service';

@Component({
  selector: 'two',
  standalone: false,
  templateUrl: './two.component.html',
  styleUrl: './two.component.css'
})
export class TwoComponent implements OnInit {

  mygroup!:FormGroup;
  finalArray:string[] = [];

  constructor(private todoService:TodoService) {

  }

  ngOnInit(): void {
    this.mygroup = new FormGroup({
      food: new FormControl(null)
    })
  }

  handleFood = () => {
    this.todoService.getFire().subscribe((object:Record<any,any>) => {
      for(let key in object) {
        this.finalArray.push(object[key])
      }
    })
  }

  onClick() {
    this.todoService.addTodo(this.mygroup.value.food).subscribe(() => console.log("sent"));
    this.finalArray = [];

    setTimeout(() => {
      this.handleFood();
    },500);

  }


}
