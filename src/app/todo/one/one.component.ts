import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'one',
  standalone: false,
  templateUrl: './one.component.html',
  styleUrl: './one.component.css'
})
export class OneComponent implements OnInit {

  mydata:any;

  constructor(private todoService:TodoService) {

  }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(item => this.mydata = item);
  }

}
