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
            name: 'Name 1',
            role: 'Role of Person',
            testimonial: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nobis omnis ad deserunt iure vel atque nihil vitae officia quam nemo minima modi repellendus ut impedit repellat delectus, corrupti tenetur.'
        },
        {
            name: 'Name 2',
            role: 'Role of Person',
            testimonial: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nobis omnis ad deserunt iure vel atque nihil vitae officia quam nemo minima modi repellendus ut impedit repellat delectus, corrupti tenetur.'
        },
        {
            name: 'Name 3',
            role: 'Role of Person',
            testimonial: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nobis omnis ad deserunt iure vel atque nihil vitae officia quam nemo minima modi repellendus ut impedit repellat delectus, corrupti tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nobis omnis ad deserunt iure vel atque nihil vitae officia quam nemo minima modi repellendus ut impedit repellat delectus, corrupti tenetur.'
        },
        {
            name: 'Name 4',
            role: 'Role of Person',
            testimonial: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nobis omnis ad deserunt iure vel atque nihil vitae officia quam nemo minima modi repellendus ut impedit repellat delectus, corrupti tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nobis omnis ad deserunt iure vel atque nihil vitae officia quam nemo minima modi repellendus ut impedit repellat delectus, corrupti tenetur.'
        },
        {
            name: 'Name 5',
            role: 'Role of Person',
            testimonial: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nobis omnis ad deserunt iure vel atque nihil vitae officia quam nemo minima modi repellendus ut impedit repellat delectus, corrupti tenetur.'
        },
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
        }, 12000);
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