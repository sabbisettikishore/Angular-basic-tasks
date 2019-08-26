import { Component, OnInit } from '@angular/core';
import { ServiceExService } from 'src/app/service-ex.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  constructor(private service:ServiceExService) { }

  ngOnInit() {
  }
greeting(){
this.service.send('Good Morning');
}
appreciate(){
  this.service.send('Well Done');
}

}
