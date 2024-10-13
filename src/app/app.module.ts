import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuillModule } from 'ngx-quill';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { EditorComponent } from './components/editor/editor.component';
import { authReducer } from './store/auth/auth.reducer';
import { projectReducer } from './store/projects/project.reducer';
import { AuthEffects } from './store/auth/auth.effect';
import { ProjectEffects } from './store/projects/project.effect';
import { SendDraftComponent } from './components/send-draft/send-draft.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { CommonModule } from '@angular/common';
import { ProjectAddComponent } from './components/project-add/project-add.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    ProjectListComponent,
    EditorComponent,
    SendDraftComponent,
    ProjectAddComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    QuillModule.forRoot(),
    EffectsModule.forRoot([AuthEffects]), 
    StoreModule.forRoot({ auth: authReducer, projects: projectReducer }), 
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
