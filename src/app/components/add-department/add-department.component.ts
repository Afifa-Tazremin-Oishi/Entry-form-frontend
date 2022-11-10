import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent {
  selectedDay: any;

  constructor(private fb: FormBuilder, private http: HttpClient){}

  addDepartmentForm: FormGroup = this.fb.group({
    code: ['', [Validators.required]],
    dept: ['', [Validators.required]],
    name: ['', [Validators.required]],
  });
  

  submitAction(){
    if(this.addDepartmentForm.valid){
      this.http.post('http://localhost:8000/add', this.addDepartmentForm.value).subscribe(res => {
        console.log(res);
        Swal.fire('Success', 'Succesfully Saved', 'success')
        this.addDepartmentForm.reset();
      })  
    }else{
      Swal.fire('Error', 'Please Input Valid Data', 'error')
    }
  }
  selectChangeHandler (event: any) {
    //update the ui
    this.selectedDay = event.target.value;
    console.log(event.target.value)
  }

}
