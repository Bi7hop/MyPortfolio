import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ CommonModule, TranslateModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {


  contactForm!: FormGroup;
  messageSent: boolean = false;
  errorMessage: string = '';


  constructor(private http: HttpClient, private fb: FormBuilder,public translateService: TranslateService) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, this.wordCountValidator(8)]],
      agree: [false, [Validators.requiredTrue]]
    });
  }


  submitForm() {
    if (this.contactForm.valid) {
      console.log('Formular erfolgreich gesendet:', this.contactForm.value);

      this.messageSent = true;
      this.contactForm.reset();
    } else {
      this.errorMessage = 'Bitte füllen Sie alle Felder korrekt aus und stellen Sie sicher, dass die Nachricht mindestens 10 Wörter enthält.';
      console.log('Formular ungültig:', this.contactForm.errors);
    }
  }

  wordCountValidator(minWords: number) {
    return (control: AbstractControl) => {
      const value = control.value || '';
      const wordCount = value.trim().split(/\s+/).length;
      return wordCount >= minWords ? null : { wordCount: true };
    };
  }

  scrollToTop():void{
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }

}
