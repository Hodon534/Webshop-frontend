import { Component } from '@angular/core';
import { RegistrationRequest } from 'src/app/model/models/registration-request.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  request: RegistrationRequest = new RegistrationRequest();

  constructor(private userService: UserService) {

  }

  onRegister() {
    console.log(this.request);
    this.userService.register(this.request).subscribe(
      (response) => {
        console.log("You have successfully registered a new account", response);
        this.request = new RegistrationRequest();
      },
      (error) => {
        console.error("Error registering new user", error);
      }
    );
  }

}
