import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-hero-marquee',
    imports: [CommonModule],
    templateUrl: './hero-marquee.component.html',
    styleUrls: ['./hero-marquee.component.scss']
})

export class HeroMarqueeComponent {
    marqueeItems = [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
        'Item 5',
        'Item 6'
    ];

    get marqueeItemsList() {
        const repetitions = 3;
        let items: string[] = [];
        for (let i = 0; i < repetitions; i++) {
            items = items.concat(this.marqueeItems);
        }
        return items;
    }
}
