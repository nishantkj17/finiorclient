import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login-popup',
  templateUrl: './login-popup.component.html',
  styleUrls: ['./login-popup.component.css']
})
export class LoginPopupComponent {
  username: string;
  password: string;

  constructor(private authService: AuthService) { }

  login(): void {
    this.authService.login(this.username, this.password)
      .subscribe(
        (token: string) => {
          // Authentication successful, handle the token
          console.log('Authentication successful. Token:', token);
          // Close the popup or perform other actions here
          this.closePopup();
        },
        (error: any) => {
          // Authentication failed, handle the error
          console.error('Authentication failed. Error:', error);
          // Display error message or perform other actions here
        }
      );
  }

  closePopup(): void {
    // Code to close the login popup
  }
}
