import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import{Department}  from '../department.model';
 import{Router}  from '@angular/router';
import { DepartmentsService } from '../departments.service';
@Component({
  selector: 'app-edit-departments',
  templateUrl: './edit-departments.component.html',
  styleUrls: ['./edit-departments.component.css']
})
export class EditDepartmentsComponent implements OnInit {

 department:Department;
  constructor(private _departmentService:DepartmentsService,private _rotuer:Router,public auth: AuthService) { }

  ngOnInit() {
if(this.auth.isAuthenticated()==true) {


    this.department=this._departmentService.getter();
  }
  else {
  this._rotuer.navigate(['offered']);
  }
  }


    processForm(){

       this._departmentService.updateDepartment(this.department).subscribe((department)=>{
         console.log(department);
         alert("Department has just been update");
         this._rotuer.navigate(['/departments']);
       },(error)=>{
         console.log(error);
       });
    }



    }

