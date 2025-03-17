import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-legal-notice',
    imports: [RouterLink],
    templateUrl: './legal-notice.component.html',
    styleUrls: [
        './legal-notice.component.scss',
        '../../../styles/_article.scss'
    ]
})

export class LegalNoticeComponent {
    getCurrentYear(): number {
        return new Date().getFullYear();
    }
}
