import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { SendDraftComponent } from './components/send-draft/send-draft.component';
import { EditorComponent } from './components/editor/editor.component';
import { ProjectAddComponent } from './components/project-add/project-add.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: LoginComponent },
  { path: 'list', component: ProjectListComponent },
  { path: 'editor', component: EditorComponent },
  { path: 'draft', component: SendDraftComponent },
  { path: 'signin', component: LoginComponent },
  { path: 'projects/new', component: ProjectAddComponent },
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  
}
