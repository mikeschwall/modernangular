import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { CoursePipe } from '../course.pipe';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'one',
  standalone: true,
  imports: [CommonModule, FormsModule, CoursePipe],  // <-- Add imports here!
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  mydata:any;

  constructor(private courseService:CourseService) {

  }

  ngOnInit(): void {
    
    this.courseService.getData().subscribe(item => this.mydata = item);
    
  }
} 
