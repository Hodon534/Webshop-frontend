import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  user = {
    username: '',
    password: ''
  };

  constructor(private userService: UserService, private router: Router, private _snackBar: MatSnackBar) {
    
  }
  
   onLogin() {
    this.userService.login(this.user).subscribe(
      (response) => {
        this._snackBar.open("You have been successfully logged in", "Ok", { duration: 5000 });
        this.router.navigate(['/']);
        this.afterLogin();
      },
      (error) => {
      }
    );
  } 

  afterLogin()  {
    this.userService.getLoggedInUser().subscribe(
      (user) => {
          console.log(user);
      },
      (error) => {
          console.error('Error fetching user:', error);
      }
  );
  }

}
