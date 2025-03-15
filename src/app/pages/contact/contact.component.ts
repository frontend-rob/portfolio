import { Component } from '@angular/core';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { InfoCardComponent } from './info-card/info-card.component';
import { FaqSectionComponent } from './faq-section/faq-section.component';

@Component({
    selector: 'app-contact',
    imports: [
        ContactFormComponent,
        InfoCardComponent,
        FaqSectionComponent
    ],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss'
})

export class ContactComponent {

}
