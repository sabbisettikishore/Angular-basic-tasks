import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appCustomvalid],[email]',
  providers: [{ provide: NG_VALIDATORS, useExisting: CustomvalidDirective, multi: true }]
})
export class CustomvalidDirective implements Validator {
  // @Input() appCustomvalid:string;
  //   constructor() { }
  //  validate(control :AbstractControl){
  //    const password=control.parent.get(this.appCustomvalid);


  // if(password.value!==control.value){
  //   return {'invalid': true};

  // }
  // return null;
  //  }
  // }





  @Input() appCustomvalid: string[] = [];
  // @Input() email:string;
  constructor() { }
  validate(control: AbstractControl): any {
    const password = control.get(this.appCustomvalid[0]);
    const cpassword = control.get(this.appCustomvalid[1]);
    const email = control.get(this.appCustomvalid[0]);
    // console.log('email1',control.get(this.appCustomvalid[0]));
    // console.log('password1',control.get(this.appCustomvalid[0]));
    // console.log('cpassword1',control.get(this.appCustomvalid[1]));
    // console.log(this.appCustomvalid);
    
    if (!password || !cpassword) {
      return null;
    }

    if (cpassword.errors) {
      return null;
    }
    
    // if (email.value === password.value) {
    //   password.setErrors({ valid1: true });
    //   console.log('username',email.value);
    // } else {
    //   password.setErrors(null);
    //     }


        
    if (password.value !== cpassword.value) {
      cpassword.setErrors({ invalid: true });

    } else {
      cpassword.setErrors(null);
    }
  }

}