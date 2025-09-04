import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TodoService } from '../todo.service';

@Component({
  selector: 'two',
  standalone: false,
  templateUrl: './two.component.html',
  styleUrl: './two.component.css'
})
export class TwoComponent implements OnInit{

  mygroup!:FormGroup;
  finalArray:any[] = [];;

  constructor(private todoService:TodoService) {

  }

  ngOnInit(): void {
    this.mygroup = new FormGroup({
      food: new FormControl(null)
    })
    
  }

  handleSubmit = () => {
    this.todoService.getFire().subscribe((object:Record<any,any>) => {
      for(let key in object) {
        this.finalArray.push(object[key]);
      }
    })
  }

  onClick() {
    this.todoService.senddata(this.mygroup.value.food).subscribe(() => console.log("sent"));
    setTimeout(() => {
      this.finalArray = [];
      this.handleSubmit();
    }, 500);
  }

}
