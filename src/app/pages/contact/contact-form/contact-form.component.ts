import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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
    buttonText = 'Send Message';
    buttonClass = 'btn btn-submit';
    http = inject(HttpClient);

    constructor(private formBuilder: FormBuilder) {
        this.contactData = this.formBuilder.group({
            name: ['', [Validators.required, Validators.pattern(/^\S+\s+\S+$/)]],
            email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
            message: ['', [Validators.required, Validators.minLength(10)]],
            privacy: [false, [Validators.requiredTrue]]
        });
    }

    post = {
        endPoint: 'YOUR_ENDPOINT_HERE',
        body: (payload: any) => JSON.stringify(payload),
        options: {
            headers: {
                'Content-Type': 'text/plain',
                responseType: 'text',
            },
        },
    };

    onSubmit() {
        this.submitted = true;
        this.contactData.markAllAsTouched();

        if (this.contactData.valid) {
            this.startProcessing();
        }
    }

    private startProcessing() {
        this.updateButtonState('Processing', 'btn btn-submit');
        setTimeout(() => {
            const formData = {
                name: this.contactData.get('name')?.value,
                email: this.contactData.get('email')?.value,
                message: this.contactData.get('message')?.value,
                privacy: this.contactData.get('privacy')?.value,
            };

            this.http.post(this.post.endPoint, this.post.body(formData), this.post.options).subscribe({
                next: () => {
                    this.showSuccess();
                },
                error: (error) => {
                    console.error('Error submitting form:', error);
                    this.resetButton();
                }
            });
        }, 2500);
    }

    private showSuccess() {
        this.updateButtonState('Message Sent!', 'btn btn-submit btn-primary');
        setTimeout(() => this.resetButton(), 2500);
    }

    private resetButton() {
        this.updateButtonState('Send Message', 'btn btn-submit');
        this.resetForm();
    }

    private updateButtonState(text: string, cssClass: string) {
        this.buttonText = text;
        this.buttonClass = cssClass;
    }

    private resetForm() {
        this.contactData.reset();
        this.submitted = false;
    }
}
