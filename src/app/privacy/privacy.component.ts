import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent implements OnInit {

  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      const currentLang = localStorage.getItem('language') || 'en';
      this.translateService.use(currentLang);
    } else {
      this.translateService.use('en'); 
    }
  }
}
