import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ThreeComponent } from '../three/three.component';

@Component({
  selector: 'two',
  standalone: false,
  templateUrl: './two.component.html',
  styleUrl: './two.component.css'
})
export class TwoComponent implements OnInit,AfterViewInit {

  mygroup!:FormGroup;
  @ViewChild(ThreeComponent) three!:ThreeComponent;

  constructor() {

  }

  ngOnInit(): void {
    this.mygroup = new FormGroup({
      food: new FormControl(null)
    })
  }

  ngAfterViewInit(): void {
    this.three.mydata="AFTER VIEW CHILD"
  }

  onClick() {
    alert(this.mygroup.value.food);
  }

}
