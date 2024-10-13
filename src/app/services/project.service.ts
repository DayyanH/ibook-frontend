import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Project } from '../models/project.model';

export interface Project {
    id?: number;
    title: string;
    content: string;
    created_at?: string;
    updated_at?: string;
}



@Injectable({
    providedIn: 'root',
})
export class ProjectService {
    private apiUrl = 'http://localhost:8000/api/projects/';

    constructor(private http: HttpClient) { }

    getProjects(): Observable<Project[]> {
        return this.http.get<Project[]>(this.apiUrl);
      }
    
      createProject(project: Project): Observable<Project> {
        return this.http.post<Project>(this.apiUrl, project);
      }
    
      updateProject(id: number, project: Project): Observable<Project> {
        return this.http.put<Project>(`${this.apiUrl}${id}/`, project);
      }
    
      deleteProject(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}${id}/`);
      }
}
