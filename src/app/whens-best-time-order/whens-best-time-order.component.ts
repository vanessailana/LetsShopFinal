import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-whens-best-time-order',
  templateUrl: './whens-best-time-order.component.html',
  styleUrls: ['./whens-best-time-order.component.css']
})
export class WhensBestTimeOrderComponent implements OnInit {

constructor(private router: Router,public auth: AuthService) { }


  ngOnInit() {

 if(this.auth.isAuthenticated()==true) {
 alert("You cab be here");
 } else {
 this.router.navigate(['']);
 }
  }

}
