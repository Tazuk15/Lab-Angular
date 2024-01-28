import { Component } from '@angular/core';
import { FormBuilder, Validators,ReactiveFormsModule  } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../services/users.service';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginform = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private UserService: UserService,
    private router: Router,
    private toastrService: ToastrService
  ) {}

  loginUser() {
    const { email, password } = this.loginform.value;
    this.UserService.getUserByEmail(email as string).subscribe({
      next: (response:any) => {
        const user = response[0];
        if (user && user.password === password) {
          sessionStorage.setItem('email', email as string);
          sessionStorage.setItem('role', user.role);
          this.toastrService.success('Successfully Login', 'Success');
          this.router.navigate(['/admin']);
        } else {
          this.toastrService.error('Email or password is incorrect', 'Error');
        }
      },
      error: (error:any) => {
        this.toastrService.error('An error occurred. Please try again later.', 'Error');
      },
    });
  }
}