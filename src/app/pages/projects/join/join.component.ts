import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterCtaComponent } from '../../../shared/footer-cta/footer-cta.component';
import { ProjectDetailsComponent } from '../../../shared/project-details/project-details.component';
import { ProjectsService } from '../../../services/projects.service';

@Component({
    selector: 'app-join',
    imports: [
        CommonModule,
        FooterCtaComponent,
        ProjectDetailsComponent
    ],
    templateUrl: './join.component.html',
    styleUrl: './join.component.scss'
})

export class JoinComponent {
    project: { year: string, title: string, subtitle: string, github: string, liveDemo: string, techStack: string[], aboutText: string, keyFeatures: { title: string, description: string }[], routerLink: string };

    constructor(private projectsService: ProjectsService) {
        this.project = this.projectsService.getProjectByRouterLink('/projects/join') || {
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
    }
}
