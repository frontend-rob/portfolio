import { Component } from '@angular/core';
import { ProfileAccordionComponent } from './profile-accordion/profile-accordion.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-profile',
    imports: [
        CommonModule,
        ProfileAccordionComponent
    ],
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.scss'
})

export class ProfileComponent {

}
