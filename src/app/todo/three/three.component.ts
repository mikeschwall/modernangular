import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-three',
  standalone: false,
  templateUrl: './three.component.html',
  styleUrl: './three.component.css'
})
export class ThreeComponent implements OnInit {

  mydata:any;
  @Input() myinput = true;
  @Output() myoutput = new EventEmitter<boolean>();

  constructor() {

  }


  ngOnInit(): void {
    
  }

  onClick() {
    this.myinput = !this.myinput;
    this.myoutput.emit(this.myinput);
  }

}
