import { Component } from '@angular/core';
import { Project, ProjectService } from '../../services/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrl: './project-add.component.css'
})
export class ProjectAddComponent {

  project: Project = {
    title: '',
    content: ''
  };

  constructor(private projectService: ProjectService, private router: Router) {}

  saveProject(): void {
    this.projectService.createProject(this.project).subscribe(() => {
      this.router.navigate(['/list']);
    });
  }
}
