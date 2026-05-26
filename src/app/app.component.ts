import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <div class="mobile-container">
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.scss'],
  imports: [RouterOutlet]
})
export class AppComponent {
  title = 'realestate-learning-app';
}
