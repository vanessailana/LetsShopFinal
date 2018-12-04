import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth/auth.service';
import { Department } from './department.model';
import { DepartmentsService } from './departments.service';
import { Router } from '@angular/router';
import {Headers, Response} from '@angular/http';
@Component({
  selector: 'app-deparments',
  templateUrl: './deparments.component.html',
  styleUrls: ['./deparments.component.css']
})

export class DeparmentsComponent implements OnInit {
departments: Array<any>;
 totalRec : number;
  page: number = 1;


  constructor(private router: Router,private departmentService: DepartmentsService,public auth: AuthService) { }

  ngOnInit() {

  if(this.auth.isAuthenticated()==true) {

    this.departmentService.getAll().subscribe(data => {
      this.departments = data;
    });
  } else {
  this.router.navigate([' ']);

  }
  }

    editDepartmentPage(department: Department) {
    this.departmentService.setter(department);
     this.router.navigate(['/editdepartments']);
  }



    private loadProd(){


    this
            .departmentService
            .getAll()
            .subscribe((resp: Response) => {
                this.departments = resp.json();
                this.totalRec = this.departments.length;
                console.log(this.totalRec);
                console.log(this.page);

                //console.log(JSON.stringify(resp.json()));
            })
  }
}
