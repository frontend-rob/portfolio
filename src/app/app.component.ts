import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
    selector: 'app-root',
    imports: [
        RouterOutlet,
        HeaderComponent,
        FooterComponent
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

    ngOnInit(): void {
        this.initializeTheme();
    }

    initializeTheme(): void {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            this.theme = savedTheme;
        } else {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            this.theme = prefersDark ? 'dark' : 'light';
        }
        document.documentElement.setAttribute('data-theme', this.theme);
    }
}
