import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

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
    @Input() project: { year: string, title: string, subtitle: string, github: string, liveDemo: string, techStack: string[], aboutText: string, keyFeatures: { title: string, description: string }[] } = {
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
