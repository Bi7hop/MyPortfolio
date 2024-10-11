import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ImprintComponent } from '../../../imprint/imprint.component';
import { PrivacyComponent } from '../../../privacy/privacy.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ CommonModule, ImprintComponent, PrivacyComponent, RouterLink ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  scrollToTop():void{
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }

}
