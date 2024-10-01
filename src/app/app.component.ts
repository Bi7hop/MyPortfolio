import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/components/header/header.component";
import { HeroComponent } from "./hero/hero.component";
import { MainContentComponent } from "./main-content/main-content.component";
import { CommonModule } from '@angular/common';
import { LinksComponent } from './shared/components/header/links/links.component';
import { FooterComponent } from "./shared/components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    HeaderComponent,
    HeroComponent,
    MainContentComponent,
    CommonModule,
    LinksComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
