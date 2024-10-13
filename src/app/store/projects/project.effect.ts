import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { ProjectService } from '../../services/project.service';
import * as ProjectActions from './project.action';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class ProjectEffects {
    constructor(private actions$: Actions, private projectService: ProjectService) {}

    loadProjects$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ProjectActions.loadProjects),
            mergeMap(() =>
                this.projectService.getProjects().pipe(
                    map((projects) => ProjectActions.loadProjectsSuccess({ projects })),
                    catchError((error) => of(ProjectActions.loadProjectsFailure({ error: error.error })))
                )
            )
        )
    );
}
