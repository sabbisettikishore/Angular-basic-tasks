import { Component, OnInit } from '@angular/core';
import { ServiceExService } from 'src/app/service-ex.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor(private service:ServiceExService) { }
data:any;
  ngOnInit() {
    this.service.message$.subscribe(message =>{
      if(message=='Good Morning'){
        this.data='Good Morning';
      }
      else if(message=='Well Done'){
        this.data='Thank  You';
      }
    })
  }
}
