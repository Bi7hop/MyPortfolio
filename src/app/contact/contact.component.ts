import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, TranslateModule, ReactiveFormsModule, HttpClientModule, RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  contactForm!: FormGroup;
  messageSent: boolean = false;
  errorMessage: string = '';

  emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  post = {
    endPoint: 'https://marcel-menke.info/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      message: ['', [Validators.required, this.wordCountValidator(8)]],
      agree: [false, [Validators.requiredTrue]]
    });
  }

  constructor(private http: HttpClient, private fb: FormBuilder, public translateService: TranslateService) {}

  wordCountValidator(minWords: number) {
    return (control: AbstractControl) => {
      if (!control.value) {
        return { required: true }; // Adjusted to use the 'required' key
      }
      const wordCount = control.value.trim().split(/\s+/).length;
      return wordCount < minWords
        ? { wordCount: { requiredWords: minWords, actualWords: wordCount } }
        : null;
    };
  }

  submitForm() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      this.http.post(this.post.endPoint, this.post.body(formData), this.post.options)
        .subscribe({
          next: () => {
            this.messageSent = true;
            this.contactForm.reset();
            this.hideSuccessMessageAfterDelay();
          },
          error: (error) => {
            this.errorMessage = 'Es gab ein Problem beim Senden der Nachricht.';
            console.error(error);
          }
        });
    } else {
      this.errorMessage = 'Bitte füllen Sie alle Felder korrekt aus und stellen Sie sicher, dass die Nachricht mindestens 8 Wörter enthält.';
      console.log('Formular ungültig:', this.contactForm.errors);
    }
  }
  

  hideSuccessMessageAfterDelay() {
    setTimeout(() => {
      this.messageSent = false;
    }, 5000);
  }

  clearErrorOnFocus(controlName: string, event: any) {
    const control = this.contactForm.controls[controlName];
    if (control.touched && control.invalid) {
      event.target.value = ''; 
      event.target.style.color = '#ffffff'; 
    }
  }

  scrollToTop(): void {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}


