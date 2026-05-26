import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { BottomNavComponent } from '../../shared/bottom-nav/bottom-nav.component';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-learn',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    MatTabsModule,
    BottomNavComponent,
    HeaderComponent
  ],
  template: `
    <div class="learn-screen page-content">
      <app-header></app-header>
      
      <div class="learn-content">
        <div class="learn-header">
          <h2 class="page-title">Learning Center</h2>
          <p class="page-subtitle">Master real estate with expert courses</p>
        </div>

        <mat-tab-group class="learn-tabs" [(selectedIndex)]="selectedTab">
          <mat-tab label="In Progress">
            <div class="tab-content">
              <div class="category-card" *ngFor="let cat of inProgressCategories">
                <div class="category-icon" [style.background]="cat.bgColor">
                  <mat-icon>{{ cat.icon }}</mat-icon>
                </div>
                <div class="category-info">
                  <h4 class="category-title">{{ cat.title }}</h4>
                  <p class="category-desc">{{ cat.description }}</p>
                  <div class="category-progress">
                    <div class="progress-track">
                      <div class="progress-fill" [style.width.%]="cat.progress"></div>
                    </div>
                    <span class="progress-text">{{ cat.progress }}% complete</span>
                  </div>
                </div>
              </div>
            </div>
          </mat-tab>

          <mat-tab label="Completed">
            <div class="tab-content">
              <div class="category-card completed" *ngFor="let cat of completedCategories">
                <div class="category-icon" [style.background]="cat.bgColor">
                  <mat-icon>{{ cat.icon }}</mat-icon>
                </div>
                <div class="category-info">
                  <h4 class="category-title">{{ cat.title }}</h4>
                  <p class="category-desc">{{ cat.description }}</p>
                  <div class="completed-badge">
                    <mat-icon>check_circle</mat-icon>
                    <span>Completed</span>
                  </div>
                </div>
              </div>
            </div>
          </mat-tab>

          <mat-tab label="All">
            <div class="tab-content">
              <div class="category-card" *ngFor="let cat of allCategories" [class.completed]="cat.completed">
                <div class="category-icon" [style.background]="cat.bgColor">
                  <mat-icon>{{ cat.icon }}</mat-icon>
                </div>
                <div class="category-info">
                  <h4 class="category-title">{{ cat.title }}</h4>
                  <p class="category-desc">{{ cat.description }}</p>
                  <div class="category-progress" *ngIf="!cat.completed">
                    <div class="progress-track">
                      <div class="progress-fill" [style.width.%]="cat.progress"></div>
                    </div>
                    <span class="progress-text">{{ cat.progress }}% complete</span>
                  </div>
                  <div class="completed-badge" *ngIf="cat.completed">
                    <mat-icon>check_circle</mat-icon>
                    <span>Completed</span>
                  </div>
                </div>
              </div>
            </div>
          </mat-tab>
        </mat-tab-group>
      </div>
    </div>
    <app-bottom-nav></app-bottom-nav>
  `,
  styleUrls: ['./learn.component.scss']
})
export class LearnComponent {
  selectedTab = 0;

  inProgressCategories = [
    { title: 'Land Basics', description: 'Understanding land types, classifications and terminology', icon: 'terrain', bgColor: 'linear-gradient(135deg, #1e3a5f, #0d1b3d)', progress: 75 },
    { title: 'Khata & EC', description: 'Khata transfer, encumbrance certificate procedures', icon: 'description', bgColor: 'linear-gradient(135deg, #5c2018, #9b4423)', progress: 40 },
    { title: 'Registration Process', description: 'Property registration steps and documentation', icon: 'assignment', bgColor: 'linear-gradient(135deg, #064e3b, #0d7a5f)', progress: 20 }
  ];

  completedCategories = [
    { title: 'Broker Training', description: 'Essential skills for real estate brokers', icon: 'support_agent', bgColor: 'linear-gradient(135deg, #4a6741, #2d5a3d)', progress: 100, completed: true },
    { title: 'Investment Tips', description: 'Smart real estate investment strategies', icon: 'trending_up', bgColor: 'linear-gradient(135deg, #7c3aed, #4f46e5)', progress: 100, completed: true }
  ];

  allCategories = [
    ...this.inProgressCategories.map(c => ({ ...c, completed: false })),
    ...this.completedCategories
  ];

  constructor(private router: Router) {}
}
