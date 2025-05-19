import { Component, OnInit } from '@angular/core';
import { TodoService } from '../course.service';


@Component({
  selector: 'one',
  standalone: false,
  templateUrl: './one.component.html',
  styleUrl: './one.component.css'
})
export class OneComponent implements OnInit {

  todos:any;

  constructor(private todoService:TodoService) {

  }

  ngOnInit(): void {
    this.todoService.fetchTodos().subscribe(item => {
      console.log("item",item);
      this.todos = item
    
    });
  }
}
