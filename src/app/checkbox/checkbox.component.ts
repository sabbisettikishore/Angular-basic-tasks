import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
check:FormGroup;
 controls:any;
 selectedOrderIds:any;
 orders = [
  { id: 1, tech: 'Java' },
  { id: 2, tech: 'C' },
  { id: 3, tech: 'Java Script' },
  { id: 4, tech: 'Angular' },
  { id: 5, tech: 'CSS' },
  { id: 6, tech: 'Python' },
  { id: 7, tech: 'PHP' }
];
  constructor(private fb:FormBuilder) { 
    this.controls = this.orders.map(c => new FormControl(false));
    this.controls[0].setValue(true);
    this.controls[1].setValue(true);
  }

  ngOnInit() {
    this.check= this.fb.group({
      orders: new FormArray(this.controls)
    });
  }

  submit() {
     this.selectedOrderIds = this.check.value.orders
      .map((v, i) => v ? this.orders[i].tech : null)
      .filter(v => v !== null);

    console.log(this.selectedOrderIds);
  }
  reset(){
    this.check.reset();
    this.controls[0].setValue(true);
    this.controls[1].setValue(true);
  }
}
