import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MobileMenuComponent } from './shared/mobile-menu/mobile-menu.component';

@Component({
    selector: 'app-root',
    imports: [
        CommonModule,
        RouterOutlet,
        HeaderComponent,
        FooterComponent,
        MobileMenuComponent
    ],
    templateUrl: './app.component.html',
    styleUrls: [
        './app.component.scss',
        './shared/header/header.component.scss',
        './shared/footer/footer.component.scss',
        ]
})

export class AppComponent implements OnInit {
    theme: string | undefined;
    showContent: boolean = false;

    constructor(private router: Router) {}

    ngOnInit(): void {
        this.initializeTheme();
    }

    initializeTheme(): void {
        this.theme = this.getSavedTheme() || this.getPreferredTheme();
        this.applyTheme(this.theme);
    }

    getSavedTheme(): string | null {
        return localStorage.getItem('theme');
    }

    getPreferredTheme(): string {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    applyTheme(theme: string): void {
        document.documentElement.setAttribute('data-theme', theme);
    }

    onHeaderAnimationDone(): void {
        this.showContent = true;
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.showContent = false;
                setTimeout(() => {
                    this.showContent = true;
                });
            }
        });
    }
}
