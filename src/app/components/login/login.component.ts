import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AuthState } from '../../store/auth/auth.reducer';
import * as AuthActions from '../../store/auth/auth.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loading = false;
  error$!: Observable<string | null>;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private store: Store<{ auth: AuthState }>, 
  ) {
    this.error$ = this.store.select(state => state.auth.error); 
   }

  ngOnInit(): void {
    // Initialize the login form
    this.loginForm = this.fb.group({
      name: ['', [Validators.required]], 
      password: ['', Validators.required] 
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return; 
    }

    this.loading = true; 
    const data = this.loginForm.value;

    this.store.dispatch(AuthActions.login(data));

    this.error$.subscribe(error => {
      if (error) {
        this.loading = false;
      } else {
        this.router.navigate(['/list']); 
      }
    });
  }
}
