import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
@Component({
  selector: 'app-admin-portal',
  templateUrl: './admin-portal.component.html',
  styleUrls: ['./admin-portal.component.css']
})
export class AdminPortalComponent implements OnInit {
profile: any;
  public number1 : number;
  public number2 : number;
  public result : number;

  public add(){
    this.result = this.number1 + this.number2
  }

  public mult(){
    this.result = this.number1 * this.number2
  }
    public sub(){
    this.result = this.number1 - this.number2
  }
    public divide(){
    this.result = this.number1 / this.number2
  }

  constructor(public auth: AuthService,private router: Router) {
    auth.handleAuthentication();
  }

  ngOnInit() {
   if(this.auth.isAuthenticated()==true) {

   alert("authorized");
   } else {
    console.log("not authorixed");
    this.router.navigate(['offered']);
   }


  }
}

