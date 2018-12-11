import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Response,RequestOptions } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Department } from './department.model';
@Injectable()

export class DepartmentsService {
  private department = new Department();
  private baseUrl = 'https://floating-peak-75558.herokuapp.com/departments';
  private baseUrl3 = 'https://floating-peak-75558.herokuapp.com/editDepartment';


  constructor(private http: HttpClient) {
  }

 getAll(): Observable<any> {
    return this.http.get<Department[]>(this.baseUrl).catch(this.errorHandler);
  }


setter(department:Department){
     this.department=department;
   }

  getter(){
    return this.department;
  }

updateDepartment(department:Department){

   return this.http.put(this.baseUrl3,department).catch(this.errorHandler);

      }


   errorHandler(error:Response){

     return Observable.throw(error||"SERVER ERROR");
  }
}
