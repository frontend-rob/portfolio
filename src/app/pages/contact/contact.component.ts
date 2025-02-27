import { Component } from '@angular/core';
import { MessageFormComponent } from './message-form/message-form.component';
import { InfoCardComponent } from './info-card/info-card.component';

@Component({
    selector: 'app-contact',
    imports: [
        MessageFormComponent,
        InfoCardComponent
    ],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss'
})

export class ContactComponent {

}
