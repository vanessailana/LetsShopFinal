import { Component, OnInit } from '@angular/core';
import {Aisle}  from '../aisle.model';
 import{Router}  from '@angular/router';
import { AisleService } from '../aisle.service';

import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-edit-aisle',
  templateUrl: './edit-aisle.component.html',
  styleUrls: ['./edit-aisle.component.css']
})
export class EditAisleComponent implements OnInit {

aisle:Aisle;
  constructor(private _aisleService:AisleService,private _rotuer:Router,public auth: AuthService) { }

  ngOnInit() {
  if(this.auth.isAuthenticated()==true) {

    this.aisle=this._aisleService.getter();
  } else {
  alert("You are not authorized to be here");
  this._rotuer.navigate(['']);
  }
  }

    processForm(){

       this._aisleService.updateAisle(this.aisle).subscribe((aisle)=>{
         console.log(aisle);
         alert("Aisle has just been update");
         this._rotuer.navigate(['/aisles']);
       },(error)=>{
         console.log(error);
       });
    }



    }
