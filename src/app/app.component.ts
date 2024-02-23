import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ColorChromeModule } from 'ngx-color/chrome';
import { NavbarComponent } from './navbar/navbar.component';
import { GeneratorComponent } from './generator/generator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    NavbarComponent,
    GeneratorComponent,
    ColorChromeModule,
    FormsModule,
  ],
})
export class AppComponent {
  title = 'angular-meme-generator';
}
