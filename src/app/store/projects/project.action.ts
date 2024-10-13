import { createAction, props } from '@ngrx/store';

export const loadProjects = createAction('[Projects] Load Projects');
export const loadProjectsSuccess = createAction('[Projects] Load Projects Success', props<{ projects: any[] }>());
export const loadProjectsFailure = createAction('[Projects] Load Projects Failure', props<{ error: string }>());
