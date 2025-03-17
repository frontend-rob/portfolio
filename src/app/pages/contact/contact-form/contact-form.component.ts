import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-contact-form',
    imports: [
        RouterLink,
        CommonModule,
        ReactiveFormsModule
    ],
    templateUrl: './contact-form.component.html',
    styleUrls: [
        './contact-form.component.scss',
        '../../../../styles/_inputs.scss'
    ]
})

export class ContactFormComponent {
    contactData: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder) {
        this.contactData = this.formBuilder.group({
            name: ['', [Validators.required, Validators.pattern(/^\S+\s+\S+$/)]],
            email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
            message: ['', [Validators.required, Validators.minLength(10)]],
            privacy: [false, [Validators.requiredTrue]]
        });
    }

    onSubmit() {
        this.submitted = true;
        this.contactData.markAllAsTouched();

        if (this.contactData.valid) {
            console.log('Contact data submitted:', this.contactData.value);
            alert('Your message has been successfully submitted!');
            this.resetForm();
        }
    }

    private resetForm() {
        this.contactData.reset();
        this.submitted = false;
    }
}
