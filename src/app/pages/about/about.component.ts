import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { SkillsetComponent } from './skillset/skillset.component';
import { ProfileComponent } from './profile/profile.component';
import { SpotlightComponent } from './spotlight/spotlight.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FooterCtaComponent } from '../../shared/footer-cta/footer-cta.component';

@Component({
    selector: 'app-about',
    imports: [
        HeroComponent,
        ProfileComponent,
        SkillsetComponent,
        SpotlightComponent,
        TestimonialsComponent,
        FooterCtaComponent
    ],
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss'
})

export class AboutComponent {

}
