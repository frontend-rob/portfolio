import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LegalNoticeComponent } from './pages/legal-notice/legal-notice.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';

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
];
