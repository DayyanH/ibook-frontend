import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Project, ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css'
})
export class ProjectListComponent {
  projects: Project[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.projectService.getProjects().subscribe(res => {
      this.projects = res;
    });
  }
}
