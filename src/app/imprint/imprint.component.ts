import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [ CommonModule, TranslateModule ],
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss']
})

export class ImprintComponent implements OnInit, OnDestroy {
  currentLanguage: 'en' | 'de' = 'en';
  private languageSubscription: Subscription | null = null;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.currentLanguage = this.translate.currentLang as 'en' | 'de';

    this.languageSubscription = this.translate.onLangChange.subscribe((event) => {
      this.currentLanguage = event.lang as 'en' | 'de';
    });
  }

  ngOnDestroy(): void {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }
}
