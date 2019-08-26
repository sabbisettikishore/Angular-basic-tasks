import { Component, OnInit, ViewChild } from '@angular/core';
import { ServiceExService } from 'src/app/service-ex.service';
import { ViewChild2Component } from '../view-child2/view-child2.component';


@Component({
  selector: 'app-view-child1',
  templateUrl: './view-child1.component.html',
  styleUrls: ['./view-child1.component.scss']
})
export class ViewChild1Component implements OnInit {

  @ViewChild(ViewChild2Component,{static: true}) child :ViewChild2Component;
  constructor(private service:ServiceExService) { }
data:any;
  ngOnInit() {
  }
click1(){
  console.log(this.child);
  this.child.ename=this.child.ename;
}
click2(){
  this.child.data=this.service.userData;
}

}
