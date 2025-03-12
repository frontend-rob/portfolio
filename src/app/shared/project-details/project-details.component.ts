import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { ProjectsService } from '../../services/projects.service';

@Component({
    selector: 'app-project-details',
    standalone: true,
    imports: [
        CommonModule,
        RouterLink
    ],
    templateUrl: './project-details.component.html',
    styleUrls: ['./project-details.component.scss']
})

export class ProjectDetailsComponent {
    @Input() project: { year: string, title: string, subtitle: string, github: string, liveDemo: string, techStack: string[], aboutText: string, keyFeatures: { title: string, description: string }[], routerLink: string } = {
        year: '',
        title: '',
        subtitle: '',
        github: '',
        liveDemo: '',
        techStack: [],
        aboutText: '',
        keyFeatures: [],
        routerLink: ''
    };

    constructor(private projectsService: ProjectsService, private router: Router) {}

    prevProject() {
        const prevProject = this.projectsService.getPreviousProject(this.project.routerLink);
        if (prevProject) {
            this.router.navigate([prevProject.routerLink]);
        }
    }

    nextProject() {
        const nextProject = this.projectsService.getNextProject(this.project.routerLink);
        if (nextProject) {
            this.router.navigate([nextProject.routerLink]);
        }
    }

    isFirstProject(): boolean {
        return this.projectsService.getPreviousProject(this.project.routerLink) === null;
    }

    isLastProject(): boolean {
        return this.projectsService.getNextProject(this.project.routerLink) === null;
    }
}
