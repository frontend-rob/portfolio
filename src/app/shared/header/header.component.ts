import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
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

export class HeaderComponent implements OnInit {
    @Input() theme: string | undefined;
    @Output() animationDone = new EventEmitter<void>();

    constructor(private router: Router) {}

    ngOnInit(): void {
        this.startAnimation();
    }

    toggleTheme(): void {
        const newTheme = this.theme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        this.theme = newTheme;
        localStorage.setItem('theme', newTheme);
    }

    startAnimation(): void {
        setTimeout(() => {
            this.onAnimationDone();
        }, 1250);
    }

    onAnimationDone(): void {
        this.animationDone.emit();
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
