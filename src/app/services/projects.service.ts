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
            techStack: ['HTML', 'CSS', 'JavaScript'],
            aboutText: 'In Brizzle Bash, the fate of Moustacheshire rests in the hands of Oswald van Bristlewick - known to all as Brizzly. As the Shadow Monsters rise from the depths of the Twilight Forest, Brizzly stands as the last line of defense for his people. With iron fists and unwavering resolve, he battles the encroaching darkness, fighting to restore peace and light to his homeland.',
            keyFeatures: [
                { title: 'Control Brizzly', description: 'Navigate through an action-packed 2D browser game - jump, run, and battle shadow monsters.' },
                { title: 'Combat Skills', description: 'Unleash powerful punches for close combat and hurl spiky iron balls to strike from a distance.' },
                { title: 'Power-ups', description: 'Collect health boosts to heal Brizzly and gather iron balls for devastating long-range attacks.' },
                { title: 'Smooth Animations', description: 'Experience fluid transitions between Brizzly\'s actions and the monsters’ movements.' },
                { title: 'Accessible Settings', description: 'Pause, resume, and toggle sounds effortlessly - tailor the experience to your liking.' },
                { title: 'Responsive UI', description: 'Enjoy a modern, intuitive interface built to ensure smooth gameplay on any device.' }
            ]
        },
        {
            spotlight: true,
            title: 'Join',
            subtitle: 'Join is a modern Kanban project management web application built with JavaScript and integrated with Firebase Realtime Database. It allows users to track tasks in real time, streamline workflows, and collaborate effortlessly - providing a clear, dynamic view of project progress.',
            year: '2024',
            src: 'img/mockups/join.webp',
            alt: 'Join Mockup',
            color: '#bfdbfe',
            routerLink: '/projects/join',
            github: 'https://github.com/frontend-rob/join-kanban-board',
            liveDemo: '#',
            techStack: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
            aboutText: 'Join is a versatile Kanban project management web application designed to help teams stay organized, track tasks in real time, and collaborate more effectively. Developed as a collaborative group project, it was built with JavaScript and powered by Firebase Realtime Database, offering a dynamic platform where tasks are seamlessly managed and updated across multiple devices. The application allows users to effortlessly manage projects, track progress, and meet deadlines, all while providing a user-friendly interface. Whether you\'re working solo or as part of a team, Join helps streamline workflows, maintain order, and enhance productivity.',
            keyFeatures: [
                { title: 'Account Management', description: 'Simulate registration, login, and logout to manage personalized accounts.' },
                { title: 'Dashboard Summary', description: 'Overview of task statuses and upcoming critical deadlines for efficient tracking.' },
                { title: 'Task Management', description: 'Easily add, edit, delete tasks, organize subtasks, and assign tasks to contacts.' },
                { title: 'Kanban Board', description: 'Drag-and-drop tasks, search by title, and update task progress effortlessly.' },
                { title: 'Contact Management', description: 'Add, edit, remove contacts, and manage personal and contact details.' },
                { title: 'Data Management', description: 'Real-time data synchronization with Firebase Realtime Database, ensuring smooth collaboration.' },
            ]
        },
        {
            spotlight: true,
            title: 'Delivery Service',
            subtitle: 'A clone of the famous web application "Lieferando," offering a smooth and user-friendly food ordering experience. This project replicates the essential features of a popular food delivery platform with an emphasis on responsiveness and seamless navigation.',
            year: '2024',
            src: 'img/mockups/delivery-service.webp',
            alt: 'Delivery Service Mockup',
            color: '#fed7aa',
            routerLink: '/projects/delivery-service',
            github: 'https://github.com/frontend-rob/delivery-service',
            liveDemo: '#',
            techStack: ['HTML', 'CSS', 'JavaScript'],
            aboutText: 'The Delivery Service app is designed to offer an intuitive and dynamic food ordering platform, inspired by the well-known "Lieferando." Users can browse through a variety of dishes, select their preferred meals, and easily manage their orders. The app offers a responsive interface that adapts across devices, making food ordering quick and easy, whether on desktop or mobile. The shopping experience is streamlined, ensuring that customers can focus on their meals and the order process without hassle.',
            keyFeatures: [
                { title: 'Responsive Design', description: 'The layout adjusts to all devices, with a sticky shopping cart on desktop for easy access.' },
                { title: 'Dynamic Categories', description: 'Dishes are dynamically rendered and organized into categories, each with images for easy navigation.' },
                { title: 'Cart Management', description: 'Users can add or remove dishes, adjust quantities, and the total price updates automatically.' },
                { title: 'Order Simulation', description: 'Choose delivery or pickup, with a minimum order value for delivery (no actual orders placed).' },
            ]
        },
        {
            spotlight: true,
            title: 'Pokédex',
            subtitle: 'A comprehensive Pokédex showcasing all 1025 Pokémon, utilizing the PokéAPI to display essential stats, evolutions, and abilities. This project brings the Pokémon universe to life in an easy-to-navigate web application, allowing users to explore and interact with their favorite Pokémon.',
            year: '2024',
            src: 'img/mockups/pokedex.webp',
            alt: 'Pokedex Mockup',
            color: '#e5e5e5',
            routerLink: '/projects/pokedex',
            github: 'https://github.com/frontend-rob/pokedex',
            liveDemo: '#',
            techStack: ['HTML', 'CSS', 'JavaScript', 'API'],
            aboutText: 'The Pokédex project is an interactive web application designed for Pokémon fans to easily explore the Pokémon universe. By integrating the PokéAPI, the app dynamically loads detailed data for all Pokémon, including stats, evolutions, and abilities. Users can search for specific Pokémon, view their full profiles, and browse through the list in batches. The responsive design ensures a seamless experience on any device, while the option to toggle between light and dark themes offers a personalized touch. Whether you\'re a casual fan or a dedicated trainer, this Pokédex provides an engaging way to explore and learn more about your favorite Pokémon.',
            keyFeatures: [
                { title: 'Explore Pokémon', description: 'Browse all 1025 Pokémon.' },
                { title: 'Batch Loading', description: 'Load Pokémon in batches of 20.' },
                { title: 'Search', description: 'Quickly find specific Pokémon by name.' },
                { title: 'Detailed Info', description: 'View stats, evolutions, and abilities.' },
                { title: 'Responsive Design', description: 'Optimized for all screen sizes.' },
                { title: 'Theme Options', description: 'Switch between dark and light mode.' },
            ]
        },
    ];

    getAllProjects() {
        return this.allProjects;
    }

    getProjectByRouterLink(routerLink: string) {
        return this.allProjects.find(project => project.routerLink === routerLink);
    }

    getPreviousProject(currentRouterLink: string) {
        const index = this.allProjects.findIndex(project => project.routerLink === currentRouterLink);
        if (index > 0) {
            return this.allProjects[index - 1];
        }
        return null;
    }

    getNextProject(currentRouterLink: string) {
        const index = this.allProjects.findIndex(project => project.routerLink === currentRouterLink);
        if (index < this.allProjects.length - 1) {
            return this.allProjects[index + 1];
        }
        return null;
    }
}