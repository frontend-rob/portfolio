import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChildren, QueryList, AfterViewInit, OnDestroy, ChangeDetectorRef } from '@angular/core';

@Component({
    selector: 'app-testimonials',
    imports: [CommonModule],
    templateUrl: './testimonials.component.html',
    styleUrl: './testimonials.component.scss'
})

export class TestimonialsComponent implements AfterViewInit, OnDestroy {
    testimonials: { name: string, role: string, testimonial: string, isActive?: boolean }[] = [
        {
            name: 'Steven Rudko',
            role: 'Frontend Developer',
            testimonial: "Robert has an extraordinary eye for design and brings impressive precision to his work. He's always willing to help and approaches challenges with a calm and reliable attitude, which has made him a real asset to the team and the Join collaborative project."
        },
        {
            name: 'Yasin Sun',
            role: 'Frontend Developer',
            testimonial: "With his exceptional frontend skills and natural design sense, Robert consistently delivers high-quality work marked by precision and creativity. His contributions to the Join project showcased his ability to build seamless, user-friendly interfaces while collaborating effectively with the team. He's not only talented but also a great team player - professional, reliable, and always willing to help."
        }
    ];

    currentPage: number = 1;
    expanded: boolean = false;
    isOverflowing: boolean[] = [];
    direction: 'next' | 'prev' = 'next';
    transitionEnabled = true;
    autoSlideInterval: any;

    @ViewChildren('testimonialContent') testimonialContents!: QueryList<ElementRef>;

    constructor(private cdr: ChangeDetectorRef) {}

    ngAfterViewInit() {
        this.checkOverflow();
        this.startAutoSlide();
        this.updateVisualTimer();
        this.cdr.detectChanges();
    }

    ngOnDestroy() {
        this.stopAutoSlide();
    }

    get loopedTestimonials() {
        return [
            this.testimonials[this.testimonials.length - 1],
            ...this.testimonials,
            this.testimonials[0]
        ];
    }

    nextPage() {
        this.updatePage(this.currentPage + 1, 1);
        this.resetAutoSlide();
    }

    prevPage() {
        this.updatePage(this.currentPage - 1, this.loopedTestimonials.length - 2);
        this.resetAutoSlide();
    }

    updatePage(newPage: number, resetPage: number) {
        this.transitionEnabled = true;
        this.currentPage = newPage;

        if (newPage >= this.loopedTestimonials.length - 1 || newPage <= 0) {
            setTimeout(() => {
                this.transitionEnabled = false;
                this.currentPage = resetPage;
            }, 500);
        }
        this.expanded = false;
        this.checkOverflow();
        this.updateVisualTimer();
        this.cdr.detectChanges();
    }

    getDisplayPage() {
        if (this.currentPage === 0) {
            return this.testimonials.length;
        } else if (this.currentPage > this.testimonials.length) {
            return 1;
        } else {
            return this.currentPage;
        }
    }

    getTransform() {
        return `translateX(-${this.currentPage * 100}%)`;
    }

    toggleExpand() {
        this.expanded = !this.expanded;
    }

    checkOverflow() {
        setTimeout(() => {
            this.isOverflowing = this.testimonialContents.toArray().map(element => {
                return element.nativeElement.scrollHeight > element.nativeElement.clientHeight;
            });
            this.cdr.detectChanges();
        });
    }

    startAutoSlide() {
        this.autoSlideInterval = setInterval(() => {
            this.nextPage();
        }, 15000);
    }

    stopAutoSlide() {
        if (this.autoSlideInterval) {
            clearInterval(this.autoSlideInterval);
        }
    }

    resetAutoSlide() {
        this.stopAutoSlide();
        this.startAutoSlide();
    }

    updateVisualTimer() {
        this.testimonials.forEach((testimonial, index) => {
            testimonial.isActive = index === this.getDisplayPage() - 1;
        });
    }
}