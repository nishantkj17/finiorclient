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
  loggedIn: boolean=false;
  hideLogIn: boolean = false;
  validLogin: boolean;
  constructor(private fb: FormBuilder, private authService: SocialAuthService, private router: Router, private financialService: financialsService) { }
  isExpanded = false;
  @Output() isLoggedIn: EventEmitter<boolean> = new EventEmitter();
  @Output() userEmail: EventEmitter<string> = new EventEmitter();
  @Output() idToken: EventEmitter<string> = new EventEmitter();
  ngOnInit() {

    this.signinForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    }); this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      if (user) {
        localStorage.clear();
        this.isLoggedIn.emit(true);
        this.userEmail.emit(user.email);
        this.idToken.emit(user.idToken);
      }
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
    localStorage.clear();
    this.isLoggedIn.emit(false);
    this.userEmail.emit('');
    this.idToken.emit('');
    this.authService.signOut();
    this.hideLogIn = false;
  }
  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
