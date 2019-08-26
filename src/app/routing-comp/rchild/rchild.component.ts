import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rchild',
  templateUrl: './rchild.component.html',
  styleUrls: ['./rchild.component.scss']
})
export class RChildComponent implements OnInit {
public id;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
   this.id=parseInt(this.route.snapshot.paramMap.get('id'));
  }

}
