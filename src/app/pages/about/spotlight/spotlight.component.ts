import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProjectsService } from '../../../services/projects.service';

@Component({
    selector: 'app-spotlight',
    imports: [RouterLink, CommonModule],
    templateUrl: './spotlight.component.html',
    styleUrl: './spotlight.component.scss'
})

export class SpotlightComponent {

    spotlightProjects: { title: string, year: string, src: string, alt: string, color: string, routerLink: string, spotlight: boolean }[] = [];

    constructor(private projectsService: ProjectsService) {
        this.loadSpotlightProjects();
    }

    private loadSpotlightProjects() {
        const allProjects = this.projectsService.getAllProjects();
        this.spotlightProjects = allProjects.filter(project => project.spotlight === true);
    }

    get featuredProjects() {
        return this.spotlightProjects;
    }

}