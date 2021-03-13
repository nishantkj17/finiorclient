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
    this.signinForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    }); this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      //console.log(this.user);
    });
  }
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);

    }
  
  signOut(): void {
    this.authService.signOut();
  }
  AssignLogInStatus(login: boolean) {
    this.loggedIn = login;
    //console.log(login);
  }
}
