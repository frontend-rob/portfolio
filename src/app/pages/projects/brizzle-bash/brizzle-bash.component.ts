import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterCtaComponent } from '../../../shared/footer-cta/footer-cta.component';
import { ProjectDetailsComponent } from '../../../shared/project-details/project-details.component';
import { ProjectsService } from '../../../services/projects.service';

@Component({
    selector: 'app-brizzle-bash',
    imports: [
        CommonModule,
        FooterCtaComponent,
        ProjectDetailsComponent
    ],
    templateUrl: './brizzle-bash.component.html',
    styleUrl: './brizzle-bash.component.scss'
})

export class BrizzleBashComponent {
    project: { year: string, title: string, subtitle: string, github: string, liveDemo: string, techStack: string[] };

    constructor(private projectsService: ProjectsService) {
        this.project = this.projectsService.getProjectByRouterLink('/projects/brizzle-bash') || {
            year: '',
            title: '',
            subtitle: '',
            github: '',
            liveDemo: '',
            techStack: []
        };
    }
}
