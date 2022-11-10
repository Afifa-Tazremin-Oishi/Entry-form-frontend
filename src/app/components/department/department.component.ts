import { ServiceService } from './service.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  empList: any;
  selectedDay: any
  data: any = null;

  displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

  constructor(private http: HttpClient, private fb: FormBuilder, private service: ServiceService){ }

  ngOnInit(): void {
    this.getAll();
  }

  addDepartmentForm: FormGroup = this.fb.group({
    code: ['', [Validators.required]],
    dept: ['', [Validators.required]],
    name: ['', [Validators.required]],
  });

  editDepartmentForm: FormGroup = this.fb.group({
    dept: [null, [Validators.required]],
    name: [null, [Validators.required]],
  });

  submitAction() {
    if (this.addDepartmentForm.valid) {
      this.service.addDepart(this.addDepartmentForm.value)
        .subscribe(
          res => {
            console.log(res)
            Swal.fire('Success', 'Successfully Saved', 'success');
            this.addDepartmentForm.reset();
            this.getAll();
          },
          (err: any) => {
            Swal.fire('Error', err?.error?.message ?? 'Menu creation Failed. Something went wrong. Please try again later.', 'error');
          }
        )
    } else {
      Swal.fire('Error', 'Please Input Valid Data', 'error');
    }
  }

  // updateAction(){
  //   if(this.editDepartmentForm.valid){
  //     console.log(this.editDepartmentForm.value);
  //     Swal.fire('Success', 'Success', 'success')
  //     this.editDepartmentForm.reset();
  //   }else{
  //     Swal.fire('Error', 'Please Input Valid Data', 'error')
  //   }
  // }
  

  updateMenu() {
    this.data.code = this.editDepartmentForm?.value?.code;
    if (this.editDepartmentForm.valid) {
      this.service.updateDept(this.data)
        .subscribe(
          res => {
            Swal.fire('Success', 'Successfully Updated', 'success');
            this.getAll();
          },
          (err: any) => {
            Swal.fire('Error', err?.error?.message ?? 'Menu update Failed. Something went wrong. Please try again later.', 'error');
            this.getAll();
          }
        )
    } else {
      Swal.fire('Error', 'Plase Submit Valid Data', 'error');
      this.getAll();
    }
  }
  selectChangeHandler (event: any) {
    //update the ui
    this.selectedDay = event.target.value;
    console.log(event.target.value);
  }
  
  getAll(){
    this.service.getAlldept().subscribe((res: any) => {
      console.log(res);
      this.empList = res.payload.output;
    })
  }

}
