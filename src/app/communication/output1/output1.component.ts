import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ServiceExService } from 'src/app/service-ex.service';

@Component({
  selector: 'app-output1',
  templateUrl: './output1.component.html',
  styleUrls: ['./output1.component.scss']
})
export class Output1Component implements OnInit {

  
  constructor(private service:ServiceExService) { }
  @Output() valueChange = new EventEmitter();

  counter = 0;
  data1:any;

  valueChanged() { 

      this.counter = this.counter + 1;

      this.valueChange.emit(this.counter);

  }
  data(){
    this.data1=this.service.userData;
    this.valueChange.emit(this.data1);
  }

  ngOnInit() {
  }

}
