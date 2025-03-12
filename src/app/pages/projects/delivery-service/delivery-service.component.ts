import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterCtaComponent } from '../../../shared/footer-cta/footer-cta.component';
import { ProjectDetailsComponent } from '../../../shared/project-details/project-details.component';
import { ProjectsService } from '../../../services/projects.service';

@Component({
    selector: 'app-delivery-service',
    imports: [
        CommonModule,
        FooterCtaComponent,
        ProjectDetailsComponent
    ],
    templateUrl: './delivery-service.component.html',
    styleUrl: './delivery-service.component.scss'
})

export class DeliveryServiceComponent {
    project: { year: string, title: string, subtitle: string, github: string, liveDemo: string, techStack: string[], aboutText: string, keyFeatures: { title: string, description: string }[] };

    constructor(private projectsService: ProjectsService) {
        this.project = this.projectsService.getProjectByRouterLink('/projects/delivery-service') || {
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
