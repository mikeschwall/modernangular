import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'two',
  standalone: false,
  templateUrl: './two.component.html',
  styleUrl: './two.component.css'
})
export class TwoComponent implements OnInit {

  mygroup!:FormGroup;
  foodArray:any[] = [];

  constructor(private todoService:TodoService) {

  }

  ngOnInit(): void {
    this.mygroup = new FormGroup({
      food: new FormControl(null)
    })
  }

  handleSubmit = () => {
    this.todoService.getFood().subscribe((object:Record<any,any>) => {
      for(let key in object) {
        this.foodArray.push(object[key])
      }
    })
  }

  onClick() {
    this.todoService.sendFood(this.mygroup.value.food).subscribe(() => console.log("sent"));
    this.foodArray = [];
    setTimeout(() => {
      this.handleSubmit();
    }, 500);
  }

}
