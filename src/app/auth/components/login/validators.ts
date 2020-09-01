import { AbstractControl } from "@angular/forms";


export function ValidateUserName(control: AbstractControl) {
    console.log("validator ", control.value);
    
    if (control.value == 'admin' ||
        control.value == 'user' || 
        control.value == 'staff'
     ) {
      return null;
    }
  
    return {
        invalidUserName: true
    };
  }