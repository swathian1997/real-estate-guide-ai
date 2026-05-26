import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BottomNavComponent } from '../../shared/bottom-nav/bottom-nav.component';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    MatInputModule,
    MatFormFieldModule,
    BottomNavComponent,
    HeaderComponent
  ],
  template: `
    <div class="home-screen page-content">
      <app-header></app-header>
      
      <div class="home-content">
        <!-- Welcome Banner -->
        <div class="welcome-banner animate-fade-in">
          <div class="welcome-text">
            <p class="greeting">Good Morning</p>
            <h2 class="user-name">Alex Johnson</h2>
          </div>
          <div class="avatar">
            <mat-icon>person</mat-icon>
          </div>
        </div>

        <!-- Search Bar -->
        <div class="search-bar animate-fade-in" style="animation-delay: 0.1s">
          <mat-form-field appearance="fill" class="full-width">
            <mat-icon matPrefix>search</mat-icon>
            <input matInput placeholder="Search lessons, topics...">
          </mat-form-field>
        </div>

        <!-- Quick Actions -->
        <div class="quick-actions animate-fade-in" style="animation-delay: 0.2s">
          <h3 class="section-title">Quick Actions</h3>
          <div class="actions-grid">
            <div class="action-card" *ngFor="let action of quickActions" (click)="onActionClick(action.route)">
              <div class="action-icon" [style.background]="action.bgColor">
                <mat-icon>{{ action.icon }}</mat-icon>
              </div>
              <span class="action-label">{{ action.label }}</span>
            </div>
          </div>
        </div>

        <!-- Learning Progress -->
        <div class="learning-progress animate-fade-in" style="animation-delay: 0.3s">
          <div class="progress-header">
            <h3 class="section-title">Today's Progress</h3>
            <span class="progress-percent">{{ progressPercent }}%</span>
          </div>
          <mat-progress-bar mode="determinate" [value]="progressPercent"></mat-progress-bar>
          <p class="progress-text">{{ progressText }}</p>
        </div>

        <!-- Featured Modules -->
        <div class="featured-modules animate-fade-in" style="animation-delay: 0.4s">
          <h3 class="section-title">Featured Learning</h3>
          <div class="modules-list">
            <mat-card class="module-card" *ngFor="let module of featuredModules" (click)="onModuleClick(module)">
              <div class="module-image" [style.background]="module.gradient">
                <mat-icon class="module-icon">{{ module.icon }}</mat-icon>
              </div>
              <div class="module-info">
                <h4 class="module-title">{{ module.title }}</h4>
                <p class="module-desc">{{ module.description }}</p>
                <div class="module-meta">
                  <span class="module-duration">
                    <mat-icon>schedule</mat-icon>
                    {{ module.duration }}
                  </span>
                </div>
              </div>
            </mat-card>
          </div>
        </div>

        <!-- AI Assistant Shortcut -->
        <div class="ai-shortcut animate-fade-in" style="animation-delay: 0.5s" (click)="navigateToAssistant()">
          <div class="ai-card">
            <div class="ai-icon">
              <mat-icon>smart_toy</mat-icon>
            </div>
            <div class="ai-text">
              <h4>Ask AI Assistant</h4>
              <p>Get instant answers about real estate</p>
            </div>
            <mat-icon class="ai-arrow">arrow_forward_ios</mat-icon>
          </div>
        </div>
      </div>
    </div>
    <app-bottom-nav></app-bottom-nav>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  progressPercent = 65;
  progressText = '3 of 5 lessons completed today';

  quickActions = [
    { icon: 'school', label: 'Learn', bgColor: 'linear-gradient(135deg, #c9a84c, #a0842e)', route: '/learn' },
    { icon: 'smart_toy', label: 'Ask AI', bgColor: 'linear-gradient(135deg, #4f46e5, #7c3aed)', route: '/assistant' },
    { icon: 'tips_and_updates', label: 'Tips', bgColor: 'linear-gradient(135deg, #0d9488, #0891b2)', route: '/learn' },
    { icon: 'trending_up', label: 'Invest', bgColor: 'linear-gradient(135deg, #dc2626, #ea580c)', route: '/learn' }
  ];

  featuredModules = [
    {
      title: 'Land Basics',
      description: 'Understanding land types and terminology',
      icon: 'terrain',
      duration: '15 min',
      gradient: 'linear-gradient(135deg, #1e3a5f, #0d1b3d)'
    },
    {
      title: 'Legal Verification',
      description: 'How to verify property documents',
      icon: 'gavel',
      duration: '20 min',
      gradient: 'linear-gradient(135deg, #5c2018, #9b4423)'
    },
    {
      title: 'Investment Tips',
      description: 'Smart real estate investment strategies',
      icon: 'account_balance',
      duration: '25 min',
      gradient: 'linear-gradient(135deg, #064e3b, #0d7a5f)'
    }
  ];

  constructor(private router: Router) {}

  onActionClick(route: string): void {
    this.router.navigate([route]);
  }

  onModuleClick(module: any): void {
    this.router.navigate(['/learn']);
  }

  navigateToAssistant(): void {
    this.router.navigate(['/assistant']);
  }
}
