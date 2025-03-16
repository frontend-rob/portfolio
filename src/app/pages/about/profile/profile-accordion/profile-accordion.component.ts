import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-profile-accordion',
    imports: [CommonModule],
    templateUrl: './profile-accordion.component.html',
    styleUrl: './profile-accordion.component.scss'
})
export class ProfileAccordionComponent {
    profileCollection = [
        { title: 'Development', content: 'With hands-on experience in a variety of projects - from sleek single-page apps to scalable platforms - I focus on writing clean, maintainable code and creating seamless, user-friendly interfaces.', icon: 'code', open: false },
        { title: 'Growth Mindset', content: 'Writing code is just one part of the process for me. It\'s about solving problems creatively and building scalable solutions that enhance user experiences. I\'m always learning and exploring new technologies to refine my skills and take every project to the next level.', icon: 'growth', open: false },
        { title: 'Work Anywhere', content: 'I\'m adaptable to any work environment, thriving in both on-site teams and remote settings. I enjoy the energy of in-person collaboration but also value the focus and flexibility remote spaces provide, enabling me to deliver high-quality results from virtually anywhere.', icon: 'work', open: false },
    ];

    toggleProfile(index: number): void {
        const isCurrentlyOpen = this.profileCollection[index].open;
        this.closeAllProfiles();
        this.profileCollection[index].open = !isCurrentlyOpen;
    }

    private closeAllProfiles(): void {
        this.profileCollection.forEach(profile => profile.open = false);
    }
}
