import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { NavigationStart, NavigationEnd, provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideNgProgressRouter } from 'ngx-progressbar/router';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
        provideHttpClient(),
        provideNgProgressRouter({
            startEvents: [NavigationStart],
            completeEvents: [NavigationEnd],
            minDuration: 200
        })
    ]
};