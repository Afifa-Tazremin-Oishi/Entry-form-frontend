import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.css']
})
export class EditDepartmentComponent {

  constructor(private fb: FormBuilder){}

  editDepartmentForm: FormGroup = this.fb.group({
    department: ['', [Validators.required]],
    name: ['', [Validators.required]],
  });
  

  submitAction(){
    if(this.editDepartmentForm.valid){
      console.log(this.editDepartmentForm.value);
      Swal.fire('Success', 'Success', 'success')
      this.editDepartmentForm.reset();
    }else{
      Swal.fire('Error', 'Please Input Valid Data', 'error')
    }
  }
  displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

}
