import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormsModule, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthDataService } from '../../data-access/auth-data.service';
import { FormInputComponent } from 'src/app/shared/ui/form-input/form-input.component';
import { CommonModule } from '@angular/common';
import { UserSessionService } from 'src/app/shared/utils/user-session.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormInputComponent,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
  ],
  providers: [AuthDataService, Router, UserSessionService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({});

  constructor(private authService: AuthDataService, private router: Router, private userSession: UserSessionService) { }

  ngOnInit(): void {
    this.initialiseLoginForm();
  }

  private initialiseLoginForm() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    })
  }

  onSubmit() {
    this.authService.authenticate();
    this.userSession.getAccessTokenParam();
  }
}

