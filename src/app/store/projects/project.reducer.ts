import { createReducer, on } from '@ngrx/store';
import * as ProjectActions from './project.action';

export interface ProjectState {
    projects: any[];
    error: string | null;
}

export const initialState: ProjectState = {
    projects: [],
    error: null,
};

export const projectReducer = createReducer(
    initialState,
    on(ProjectActions.loadProjectsSuccess, (state, { projects }) => ({
        ...state,
        projects,
        error: null,
    })),
    on(ProjectActions.loadProjectsFailure, (state, { error }) => ({
        ...state,
        error,
    }))
);
