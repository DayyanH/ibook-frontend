import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AuthState } from '../store/auth/auth.reducer';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private store: Store<{ auth: AuthState }>) {}

  private apiUrl = 'http://localhost:8000/api'; // Django backend

  signUp(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register/`, data);
  }

  signIn(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login/`, data);
  }

  logout() {
    localStorage.removeItem('auth_token'); 
  }

  saveToken(token: string): void {
    localStorage.setItem('auth_token', token); 
  }

  getToken(): string | null {
    return localStorage.getItem('auth_token');
  }
}
