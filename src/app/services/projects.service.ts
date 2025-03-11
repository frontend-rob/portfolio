import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class ProjectsService {

    private allProjects = [
        {
            spotlight: true,
            title: 'Brizzle Bash',
            subtitle: 'Brizzle Bash is a fun 2D browser game designed with JavaScript, utilizing object-oriented programming concepts to create an immersive and smooth gameplay experience. Through the use of OOP principles, the game ensures code maintainability and scalability, allowing for future expansion.',
            year: '2025',
            src: 'img/mockups/brizzle-bash.webp',
            alt: 'Brizzle Bash Mockup',
            color: '#fbcfe8',
            routerLink: '/projects/brizzle-bash',
            github: 'https://github.com/frontend-rob/brizzle-bash',
            liveDemo: '#',
            techStack: ['HTML', 'CSS', 'JavaScript']
        },
        {
            spotlight: true,
            title: 'Join - Kanban Board',
            subtitle: '',
            year: '2024',
            src: 'img/mockups/join.webp',
            alt: 'Join Mockup',
            color: '#bfdbfe',
            routerLink: '/projects/join',
            github: 'https://github.com/frontend-rob/join-kanban-board',
            liveDemo: '#',
            techStack: ['HTML', 'CSS', 'JavaScript', 'Firebase']
        },
        {
            spotlight: true,
            title: 'Delivery Service',
            subtitle: '',
            year: '2024',
            src: 'img/mockups/delivery-service.webp',
            alt: 'Delivery Service Mockup',
            color: '#fed7aa',
            routerLink: '/projects/delivery-service',
            github: 'https://github.com/frontend-rob/delivery-service',
            liveDemo: '#',
            techStack: ['HTML', 'CSS', 'JavaScript']
        },
       {
            spotlight: true,
            title: 'Pokedex',
            subtitle: '',
            year: '2024',
            src: 'img/mockups/pokedex.webp',
            alt: 'Pokedex Mockup',
            color: '#e5e5e5',
            routerLink: '/projects/pokedex',
            github: 'https://github.com/frontend-rob/pokedex',
            liveDemo: '#',
            techStack: ['HTML', 'CSS', 'JavaScript', 'API']
        },
    ];

    getAllProjects() {
        return this.allProjects;
    }

    getProjectByRouterLink(routerLink: string) {
        return this.allProjects.find(project => project.routerLink === routerLink);
    }
}