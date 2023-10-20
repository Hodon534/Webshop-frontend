import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { RegistrationRequest } from '../model/models/registration-request.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  loginUrl: string = "http://localhost:8080/login"
  registerUrl: string = "http://localhost:8080/api/v1/registration/add";
  loggedUserUrl: string = "http://localhost:8080/api/v1/users/logged";
  loggedUser: any;

  constructor(private http: HttpClient) { 

  }
  // start test



  // end test

  login(user: any): Observable<any> {
    const body = new URLSearchParams();
    body.set('username', user.username);
    body.set('password', user.password);

    const headers = new HttpHeaders({
      //'Content-Type': 'application/x-www-form-urlencoded'
      'Content-Type': 'application/json'

    });

    return this.http.post(this.loginUrl, body);
  }

  register(request: RegistrationRequest): Observable<RegistrationRequest> {
    return this.http.post<RegistrationRequest>(this.registerUrl, request);

  }

  getLoggedInUser() {
    return this.http.get(this.loggedUserUrl);
}
  
}
