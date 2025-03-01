import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-skillset',
    imports: [CommonModule],
    templateUrl: './skillset.component.html',
    styleUrl: './skillset.component.scss'
})

export class SkillsetComponent {
    skills: { text: string, img: string }[] = [
        { text: 'HTML', img: 'skills/html.svg' },
        { text: 'CSS', img: 'skills/css.svg' },
        { text: 'SCSS', img: 'skills/scss.svg' },
        { text: 'Tailwind CSS', img: 'skills/tailwind.svg' },
        { text: 'JavaScript', img: 'skills/javascript.svg' },
        { text: 'TypeScript', img: 'skills/typescript.svg' },
        { text: 'Angular', img: 'skills/angular.svg' },
        { text: 'Firebase', img: 'skills/firebase.svg' },
        { text: 'Git', img: 'skills/git.svg' },
        { text: 'Figma', img: 'skills/figma.svg' },
    ];

    get skillSetList(): { text: string, img: string }[] {
        const repetitions = 3;
        let items: { text: string, img: string }[] = [];
        for (let i = 0; i < repetitions; i++) {
            items = items.concat(this.skills);
        }
        return items;
    }
}
