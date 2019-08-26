import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input1',
  templateUrl: './input1.component.html',
  styleUrls: ['./input1.component.scss']
})
export class Input1Component implements OnInit {
  @Input() data:any;
  @Input() data2:any;
  constructor() { }

  ngOnInit() {
  }

}
