import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

  data1: any;

  constructor() { }
  displayCounter(count) {

    console.log(count);

}
display(data){
  this.data1=data;
}

  ngOnInit() {
  }

}
