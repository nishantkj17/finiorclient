import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SocialAuthService, FacebookLoginProvider, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { financialsService } from '../service/financialsService';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  signinForm: FormGroup;
  user: SocialUser;
  loggedIn: boolean;
  hideLogIn: boolean = false;
  validLogin: boolean;
  constructor(private fb: FormBuilder, private authService: SocialAuthService, private router: Router, private financialService: financialsService) { }
  isExpanded = false;
  @Output() isLoggedIn: EventEmitter<boolean> = new EventEmitter();
  ngOnInit() {

    this.signinForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    }); this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      if (user) {
        localStorage.setItem('user', user.email);
        localStorage.setItem("jwt", user.idToken);
      }
      console.log(this.user);
    });
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  
    this.router.navigate(['dashboard'], {
    });
    this.hideLogIn = true;
  }

  signOut(): void {
    this.authService.signOut();
    localStorage.removeItem('user');
    localStorage.removeItem("jwt");
    this.hideLogIn = false;
  }
  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
