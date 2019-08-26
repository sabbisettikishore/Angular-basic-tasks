import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routing-comp',
  templateUrl: './routing-comp.component.html',
  styleUrls: ['./routing-comp.component.scss']
})
export class RoutingCompComponent implements OnInit {

  constructor(private route:Router) { }
  angular=[
    {id:1, topic:'forms'},
    {id:2, topic:'component'},
    {id:3, topic:'module'},
    {id:4, topic:'pipes'},
    {id:5, topic:'component communication'},
    {id:6, topic:'directives'},
    {id:7, topic:'routing'},
    {id:8, topic:'services'},
  ];
  ngOnInit() {
  }
select(topic){
  this.route.navigate(['/rchild',topic.id]);
}
}
