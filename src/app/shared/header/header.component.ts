import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
    selector: 'app-header',
    imports: [
        CommonModule,
        RouterLink,
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})

export class HeaderComponent {
    @Input() theme: string | undefined;

    constructor(private router: Router) {}

    toggleTheme(): void {
        const newTheme = this.theme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        this.theme = newTheme;
        localStorage.setItem('theme', newTheme);
    }

    isActive(url: string): boolean {
        return this.router.isActive(url, {
            paths: 'exact',
            queryParams: 'ignored',
            matrixParams: 'ignored',
            fragment: 'ignored'
        });
    }
}
