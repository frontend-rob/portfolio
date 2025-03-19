import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { NgProgressbar } from 'ngx-progressbar';
import { NgProgressRouter } from 'ngx-progressbar/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MobileMenuComponent } from './shared/mobile-menu/mobile-menu.component';

@Component({
    selector: 'app-root',
    imports: [
        CommonModule,
        RouterOutlet,
        NgProgressbar,
        NgProgressRouter,
        HeaderComponent,
        FooterComponent,
        MobileMenuComponent,

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

    constructor(private router: Router) { }

    ngOnInit(): void {
        this.initializeTheme();
        this.logStyle();
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

    logStyle(): void {
        console.log(`%c
%c>_ Welcome to DEV Mode...%c

👋 I'm Robert, a creative developer & design enthusiast.
💻 Skill set: HTML, CSS, SCSS, JavaScript, TypeScript, Angular.
🚀 Portfolio: WEBSITEURL_HERE
📧 Contact: EMAIL_HERE 

Ready to bring your ideas to life? - I’m just a message away ✨
`,
            "color: inherit;",
            "background-color: #2bb990; color: white; padding: 0.5rem 1rem; border-radius: 1rem; font-size: .875rem; font-weight: bold;",
            "line-height: 2; color: inherit;");
    }

}