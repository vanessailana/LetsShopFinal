import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';
 import{Router}  from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,public auth: AuthService) { }

  ngOnInit() {
   if(this.auth.isAuthenticated()==true) {
   this.router.navigate(['/admin']);
   } else {
  this.router.navigate(['']);
   }
  }

}
