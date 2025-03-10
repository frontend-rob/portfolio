import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-spotlight',
    imports: [RouterLink, CommonModule],
    templateUrl: './spotlight.component.html',
    styleUrl: './spotlight.component.scss'
})

export class SpotlightComponent {

    spotlightProjects: { title: string, year: string, src: string, alt: string, color: string, routerLink: string }[] = [
        {
            title: 'Brizzle Bash',
            year: '2025',
            src: 'img/mockups/brizzle-bash.webp',
            alt: 'Brizzle Bash Mockup',
            color: '#fbcfe8',
            routerLink: ''
        },
        {
            title: 'Join - Kanban Board',
            year: '2024',
            src: 'img/mockups/join.webp',
            alt: 'Join Mockup',
            color: '#bfdbfe',
            routerLink: ''
        },
        {
            title: 'Delivery Service',
            year: '2024',
            src: 'img/mockups/delivery-service.webp',
            alt: 'Delivery Service Mockup',
            color: '#fed7aa',
            routerLink: ''
        },
        {
            title: 'Pokedex',
            year: '2024',
            src: 'img/mockups/pokedex.webp',
            alt: 'Pokedex Mockup',
            color: '#e5e5e5',
            routerLink: ''
        },
    ];

    get featuredProjects() {
        return this.spotlightProjects
    }

}