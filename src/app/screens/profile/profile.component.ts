import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BottomNavComponent } from '../../shared/bottom-nav/bottom-nav.component';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-profile',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
    MatProgressBarModule,
    BottomNavComponent,
    HeaderComponent
  ],
  template: `
    <div class="profile-screen page-content">
      <app-header></app-header>
      
      <div class="profile-content">
        <!-- User Card -->
        <div class="user-card">
          <div class="user-avatar">
            <mat-icon>person</mat-icon>
          </div>
          <h2 class="user-name">Alex Johnson</h2>
          <p class="user-role">Real Estate Learner</p>
          <div class="user-stats">
            <div class="stat">
              <span class="stat-value">12</span>
              <span class="stat-label">Lessons</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat">
              <span class="stat-value">5</span>
              <span class="stat-label">Completed</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat">
              <span class="stat-value">68%</span>
              <span class="stat-label">Progress</span>
            </div>
          </div>
        </div>

        <!-- Learning Stats -->
        <div class="stats-section">
          <h3 class="section-title">Learning Progress</h3>
          <mat-card class="stats-card">
            <div class="stat-row">
              <div class="stat-info">
                <span class="stat-name">Overall Completion</span>
                <span class="stat-percent">68%</span>
              </div>
              <mat-progress-bar mode="determinate" [value]="68"></mat-progress-bar>
            </div>
            <div class="stat-row">
              <div class="stat-info">
                <span class="stat-name">This Week</span>
                <span class="stat-percent">3 hrs</span>
              </div>
              <mat-progress-bar mode="determinate" [value]="45"></mat-progress-bar>
            </div>
            <div class="stat-row">
              <div class="stat-info">
                <span class="stat-name">Quiz Score</span>
                <span class="stat-percent">82%</span>
              </div>
              <mat-progress-bar mode="determinate" [value]="82"></mat-progress-bar>
            </div>
          </mat-card>
        </div>

        <!-- Saved Lessons -->
        <div class="saved-section">
          <h3 class="section-title">Saved Lessons</h3>
          <div class="saved-list">
            <div class="saved-item" *ngFor="let item of savedLessons">
              <div class="saved-icon">
                <mat-icon>{{ item.icon }}</mat-icon>
              </div>
              <div class="saved-info">
                <h4>{{ item.title }}</h4>
                <p>{{ item.category }}</p>
              </div>
              <mat-icon class="saved-arrow">chevron_right</mat-icon>
            </div>
          </div>
        </div>

        <!-- Settings -->
        <div class="settings-section">
          <h3 class="section-title">Settings</h3>
          <mat-card class="settings-card">
            <div class="setting-item">
              <div class="setting-info">
                <mat-icon>notifications</mat-icon>
                <span>Notifications</span>
              </div>
              <mat-slide-toggle [checked]="true"></mat-slide-toggle>
            </div>
            <div class="setting-item">
              <div class="setting-info">
                <mat-icon>dark_mode</mat-icon>
                <span>Dark Mode</span>
              </div>
              <mat-slide-toggle [checked]="true" [disabled]="true"></mat-slide-toggle>
            </div>
            <div class="setting-item">
              <div class="setting-info">
                <mat-icon>translate</mat-icon>
                <span>Language</span>
              </div>
              <span class="setting-value">English</span>
            </div>
            <div class="setting-item">
              <div class="setting-info">
                <mat-icon>help</mat-icon>
                <span>Help & Support</span>
              </div>
              <mat-icon class="setting-arrow">chevron_right</mat-icon>
            </div>
          </mat-card>
        </div>

        <!-- Logout -->
        <div class="logout-section">
          <button mat-stroked-button class="logout-btn full-width" (click)="onLogout()">
            <mat-icon>logout</mat-icon>
            Sign Out
          </button>
        </div>
      </div>
    </div>
    <app-bottom-nav></app-bottom-nav>
  `,
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  savedLessons = [
    { title: 'DC Conversion Guide', category: 'Land Basics', icon: 'terrain' },
    { title: 'A vs B Khata', category: 'Legal', icon: 'description' },
    { title: 'Investment ROI Calc', category: 'Investment', icon: 'calculate' }
  ];

  constructor(private router: Router) {}

  onLogout(): void {
    this.router.navigate(['/login']);
  }
}
