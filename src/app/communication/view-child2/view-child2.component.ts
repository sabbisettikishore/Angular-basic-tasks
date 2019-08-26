import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-child2',
  templateUrl: './view-child2.component.html',
  styleUrls: ['./view-child2.component.scss']
})
export class ViewChild2Component implements OnInit {
  ename="sabbisetti";
  data:any;
  constructor() { }

  ngOnInit() {
  }

}
