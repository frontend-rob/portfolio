import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
    selector: 'app-mobile-menu',
    imports: [
        CommonModule,
        RouterLink
    ],
    templateUrl: './mobile-menu.component.html',
    styleUrl: './mobile-menu.component.scss'
})

export class MobileMenuComponent {
    constructor(private router: Router) { }

    isActive(url: string): boolean {
        return this.router.isActive(url, {
            paths: 'exact',
            queryParams: 'ignored',
            matrixParams: 'ignored',
            fragment: 'ignored'
        });
    }
}
