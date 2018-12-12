import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  profile: any;

  constructor(public auth: AuthService,private router: Router) {
    auth.handleAuthentication();
      auth.scheduleRenewal();
      auth.renewToken();

  }


 ngOnInit() {
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
      });
      this.router.navigate([' ']);
    }
  }

}
