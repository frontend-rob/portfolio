import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class ProjectsService {

    private allProjects = [
        {
            title: 'Brizzle Bash',
            year: '2025',
            src: 'img/mockups/brizzle-bash.webp',
            alt: 'Brizzle Bash Mockup',
            color: '#fbcfe8',
            routerLink: '',
            spotlight: true
        },
        {
            title: 'Join - Kanban Board',
            year: '2024',
            src: 'img/mockups/join.webp',
            alt: 'Join Mockup',
            color: '#bfdbfe',
            routerLink: '',
            spotlight: true
        },
        {
            title: 'Delivery Service',
            year: '2024',
            src: 'img/mockups/delivery-service.webp',
            alt: 'Delivery Service Mockup',
            color: '#fed7aa',
            routerLink: '',
            spotlight: true
        },
        {
            title: 'Pokedex',
            year: '2024',
            src: 'img/mockups/pokedex.webp',
            alt: 'Pokedex Mockup',
            color: '#e5e5e5',
            routerLink: '',
            spotlight: true
        }
    ];

    getAllProjects() {
        return this.allProjects;
    }
}