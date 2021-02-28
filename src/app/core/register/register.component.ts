import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../authentication/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  userForm: FormGroup;
  constructor(public authService: AuthenticationService) {}

  ngOnInit(): void {
    this.userForm = this.generateForm();
  }

  generateForm(): FormGroup {
    return new FormGroup({
      email: new FormControl(''),
      name: new FormControl(''),
      password: new FormControl(''),
    });
  }

  registerUser(): void {
    const currentUser = this.userForm.getRawValue();
    this.authService.SignUp(currentUser);
  }
}
