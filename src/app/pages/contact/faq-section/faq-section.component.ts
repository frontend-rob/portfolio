import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-faq-section',
    imports: [CommonModule],
    templateUrl: './faq-section.component.html',
    styleUrl: './faq-section.component.scss'
})

export class FaqSectionComponent {
    faqCollection = [
        { question: 'What\'s your experience as a developer?', answer: 'I\'m a creative frontend developer with a background in environmental engineering. My problem-solving skills and analytical mindset enable me to build user-centric web applications with clean, maintainable code and seamless interfaces. I have hands-on experience with a variety of projects, from single-page applications to scalable platforms.', open: false },
        { question: 'What technologies power your projects?', answer: 'I primarily work with modern frontend technologies like HTML, CSS, and JavaScript. Currently, I\'m focused on Angular, but I\'m always looking to expand my skill set. React and Vue.js are on my radar, and I\'m excited to dive into new tech challenges as they come up!', open: false },
        { question: 'Are you available to join as full time?', answer: 'Yes, I\'m available for full-time positions in a company where I can contribute my creativity to building exceptional web applications and crafting meaningful, user-friendly experiences with a strong focus on design.', open: false },
        { question: 'Do you work on-site or remotely?', answer: 'I\'m comfortable with both on-site and remote work. While I enjoy the energy of on-site collaboration, I truly appreciate the focus and flexibility remote work provides. Regardless of the setup, I\'m committed to delivering high-quality results from virtually anywhere.', open: false },
    ];

    toggleFaq(index: number): void {
        const isCurrentlyOpen = this.faqCollection[index].open;
        this.closeAllFaqs();
        this.faqCollection[index].open = !isCurrentlyOpen;
    }

    private closeAllFaqs(): void {
        this.faqCollection.forEach(faq => faq.open = false);
    }
}
