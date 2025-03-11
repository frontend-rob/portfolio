import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProjectsService } from '../../services/projects.service';
import { FooterCtaComponent } from '../../shared/footer-cta/footer-cta.component';

@Component({
    selector: 'app-projects',
    imports: [
        CommonModule,
        RouterLink,
        FooterCtaComponent
    ],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.scss'
})

export class ProjectsComponent {

    allProjects: { title: string, year: string, src: string, alt: string, color: string, routerLink: string, spotlight: boolean }[] = [];

    constructor(private projectsService: ProjectsService) {
        this.loadAllProjects();
    }

    private loadAllProjects() {
        this.allProjects = this.projectsService.getAllProjects();
    }
}
