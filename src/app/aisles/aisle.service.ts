import { Injectable } from '@angular/core';
import { Aisle } from './aisle.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class AisleService {
private aisle = new Aisle();
private baseUrl = 'https://floating-peak-75558.herokuapp.com/aisles';
private baseUrl3 = 'https://floating-peak-75558.herokuapp.com/editAisle';

  constructor(private http: HttpClient) {
  }

 getAll(): Observable<any> {
    return this.http.get<Aisle[]>(this.baseUrl).catch(this.errorHandler);
  }
setter(aisle:Aisle){
     this.aisle=aisle;
   }

  getter(){
    return this.aisle;
  }

updateAisle(aisle:Aisle){

   return this.http.put(this.baseUrl3,aisle).catch(this.errorHandler);

      }


   errorHandler(error:Response){

     return Observable.throw(error||"SERVER ERROR");
  }
}

