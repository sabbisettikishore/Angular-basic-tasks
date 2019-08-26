import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServiceExService } from 'src/app/service-ex.service';

@Component({
  selector: 'app-childform',
  templateUrl: './childform.component.html',
  styleUrls: ['./childform.component.scss']
})
export class ChildformComponent implements OnInit{
  
  
@Input() userform:FormGroup;

  constructor() { }

  ngOnInit() {
  
  }


}
