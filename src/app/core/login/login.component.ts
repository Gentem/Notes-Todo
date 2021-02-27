import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;
  constructor(public authService: AuthenticationService) {}

  ngOnInit(): void {
    this.userForm = this.generateForm();
  }

  generateForm(): FormGroup {
    return new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  loginUser(): void {
    const currentUser = this.userForm.getRawValue();
    this.authService.SignUserIn(currentUser);
  }
}
