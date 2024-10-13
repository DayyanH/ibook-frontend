import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signUpForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.signUpForm = this.fb.group({
      name: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      const { name, password } = this.signUpForm.value;

      this.authService.signUp({ name, password }).subscribe(
        (response) => {
          console.log('Sign up successful:', response);
          this.router.navigate(['/signin']); 
        },
        (error) => {
          console.error('Sign up failed:', error);
          this.errorMessage = 'Sign up failed. Please try again.'; 
        }
      );
    }
  }
}