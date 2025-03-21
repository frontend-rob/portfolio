import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-privacy-policy',
    imports: [RouterLink],
    templateUrl: './privacy-policy.component.html',
    styleUrls: [
        './privacy-policy.component.scss',
        '../../../styles/_article.scss'
    ]
})

export class PrivacyPolicyComponent {
    getCurrentYear(): number {
        return new Date().getFullYear();
    }
}
