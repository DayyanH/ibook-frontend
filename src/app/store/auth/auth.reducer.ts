import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.action';

export interface AuthState {
    token: string | null;
    error: string | null;
}

export const initialState: AuthState = {
    token: null,
    error: null,
};

export const authReducer = createReducer(
    initialState,
    on(AuthActions.loginSuccess, (state, { token }) => ({
        ...state,
        token,
        error: null,
    })),
    on(AuthActions.loginFailure, (state, { error }) => ({
        ...state,
        error,
    })),
    on(AuthActions.logout, (state) => ({
        ...state,
        token: null,
        error: null, 
    }))
);
