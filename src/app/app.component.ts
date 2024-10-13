import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthState } from './store/auth/auth.reducer';
import * as AuthActions from './store/auth/auth.action'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private router: Router, private store: Store<{ auth: AuthState }>) {}

}
