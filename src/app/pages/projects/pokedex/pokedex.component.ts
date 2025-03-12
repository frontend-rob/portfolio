import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterCtaComponent } from '../../../shared/footer-cta/footer-cta.component';
import { ProjectDetailsComponent } from '../../../shared/project-details/project-details.component';
import { ProjectsService } from '../../../services/projects.service';

@Component({
    selector: 'app-pokedex',
    imports: [
        CommonModule,
        FooterCtaComponent,
        ProjectDetailsComponent
    ],
    templateUrl: './pokedex.component.html',
    styleUrl: './pokedex.component.scss'
})

export class PokedexComponent {
    project: { year: string, title: string, subtitle: string, github: string, liveDemo: string, techStack: string[], aboutText: string, keyFeatures: { title: string, description: string }[] };

    constructor(private projectsService: ProjectsService) {
        this.project = this.projectsService.getProjectByRouterLink('/projects/pokedex') || {
            year: '',
            title: '',
            subtitle: '',
            github: '',
            liveDemo: '',
            techStack: [],
            aboutText: '',
            keyFeatures: []
        };
    }
}
