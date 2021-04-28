import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { SocialLoginModule, SocialAuthService, SocialAuthServiceConfig, FacebookLoginProvider, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { filter, map, mergeMap } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
_router:string;
  signinForm: FormGroup;
  user: SocialUser;
  loggedIn: boolean;
  visibility:boolean=false;
  constructor(private fb: FormBuilder, private authService: SocialAuthService, private router:Router, private activatedRoute:ActivatedRoute) {

   }

  ngOnInit() { 
  
  }
 
  AssignLogInStatus(login: boolean) {
    this.loggedIn = login;
    //console.log(login);
  }

  AssignUser(userEmail: string)
  {
    localStorage.removeItem('user');
    localStorage.setItem('user', userEmail);
    console.log(userEmail);
  }

  AssignUserToken(userToken: string)
  {
    localStorage.removeItem('jwt');
    localStorage.setItem('jwt', userToken);
    console.log(userToken);
  }
}
