import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LegalNoticeComponent } from './pages/legal-notice/legal-notice.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { BrizzleBashComponent } from './pages/projects/brizzle-bash/brizzle-bash.component';
import { JoinComponent } from './pages/projects/join/join.component';
import { DeliveryServiceComponent } from './pages/projects/delivery-service/delivery-service.component';
import { PokedexComponent } from './pages/projects/pokedex/pokedex.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Robert Greulich - Frontend Developer',
        component: AboutComponent,
    },
    {
        path: 'projects',
        title: 'Projects | Robert Greulich',
        component: ProjectsComponent,
    },
    {
        path: 'contact',
        title: 'Contact | Robert Greulich',
        component: ContactComponent,
    },
    {
        path: 'legal-notice',
        title: 'Legal Notice | Robert Greulich',
        component: LegalNoticeComponent,
    },
    {
        path: 'privacy-policy',
        title: 'Privacy Policy | Robert Greulich',
        component: PrivacyPolicyComponent,
    },
    {
        path: 'projects/brizzle-bash',
        title: 'Brizzle Bash | Robert Greulich',
        component: BrizzleBashComponent,
    },
    {
        path: 'projects/join',
        title: 'Join | Robert Greulich',
        component: JoinComponent,
    },
    {
        path: 'projects/delivery-service',
        title: 'Delivery Service | Robert Greulich',
        component: DeliveryServiceComponent,
    },
    {
        path: 'projects/pokedex',
        title: 'Pokedex | Robert Greulich',
        component: PokedexComponent,
    },
];
