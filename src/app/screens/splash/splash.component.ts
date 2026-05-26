import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-splash',
  imports: [CommonModule, MatIconModule],
  template: `
    <div class="splash-screen">
      <div class="splash-content">
        <div class="logo-container">
          <div class="logo-icon animate-fade-in">
            <mat-icon class="logo-symbol">apartment</mat-icon>
          </div>
        </div>
        
        <div class="brand-text animate-fade-in" style="animation-delay: 0.3s">
          <h1 class="app-name">Real Estate Guide AI</h1>
          <p class="tagline">Your Complete Real Estate Knowledge Partner</p>
        </div>
        
        <div class="loading-bar animate-fade-in" style="animation-delay: 0.6s">
          <div class="bar-track">
            <div class="bar-fill"></div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 3000);
  }
}
