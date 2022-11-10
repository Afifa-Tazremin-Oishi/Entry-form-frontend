import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getAlldept(){
    return this.http.get('http://localhost:8000/getallemployee');
  }
 addDepart(requestBody: any){
  return this.http.post('http://localhost:8000/add', requestBody);
 }
 updateDept(requestBody: any) {
  return this.http.patch('http://localhost:8000/updateemployee', requestBody);
}
}
