import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-skillset',
    imports: [CommonModule],
    templateUrl: './skillset.component.html',
    styleUrl: './skillset.component.scss'
})
export class SkillsetComponent implements OnInit {
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
        { text: 'GitHub', img: '' },
        { text: 'Stylelint', img: '' },
        { text: 'Figma', img: 'skills/figma.svg' }
    ];

    ngOnInit(): void {

        this.updateIcons();
        const themeObserver = new MutationObserver(() => {
            this.updateIcons();
        });

        themeObserver.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['data-theme']
        });
    }

    private updateIcons(): void {
        const theme = document.documentElement.getAttribute('data-theme');
        this.updateIcon('GitHub', theme === 'dark' ? 'skills/github-light.svg' : 'skills/github-dark.svg');
        this.updateIcon('Stylelint', theme === 'dark' ? 'skills/stylelint-light.svg' : 'skills/stylelint-dark.svg');
    }

    private updateIcon(skillName: string, iconPath: string): void {
        const skillIndex = this.skills.findIndex(skill => skill.text === skillName);
        if (skillIndex !== -1) {
            this.skills[skillIndex].img = iconPath;
        }
    }

    get skillSetList(): { text: string, img: string }[] {
        return this.skills;
    }
}
