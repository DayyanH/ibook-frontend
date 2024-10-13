import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { AuthService } from '../../services/auth.service';
import * as AuthActions from './auth.action';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class AuthEffects {
    constructor(private actions: Actions, private authService: AuthService) {}
  
    login$ = createEffect(() => 
      this.actions.pipe(
        ofType(AuthActions.login),
        mergeMap(({ name, password }) =>
          this.authService.signIn({name, password}).pipe(
            map(({ token }) => {
              this.authService.saveToken(token); 
              return AuthActions.loginSuccess({ token });
            }),
            catchError((error) => of(AuthActions.loginFailure({ error: error.error })))
          )
        )
      )
    );

    logout$ = createEffect(() =>
        this.actions.pipe(
          ofType(AuthActions.logout),
          mergeMap(() => {
            this.authService.logout(); 
            return of(AuthActions.logout());
          })
        )
      );
  }
  
