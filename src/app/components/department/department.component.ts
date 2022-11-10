import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  empList: any;

  constructor(private http: HttpClient){ }

  ngOnInit(): void {
    this.getAllemp();
  }
  
  getAllemp(){
    this.http.get('http://localhost:8000/getallemployee').subscribe((res: any) => {
      console.log('Hello oishee your data' + res.payload.output);
      this.empList = res.payload.output;
    })
  }

}
