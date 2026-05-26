import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  imports: [CommonModule, MatIconModule, MatButtonModule],
  template: `
    <header class="app-header">
      <div class="header-content">
        <button mat-icon-button class="back-btn" (click)="goBack()" *ngIf="showBack">
          <mat-icon>arrow_back_ios</mat-icon>
        </button>
        <div class="header-spacer" *ngIf="!showBack"></div>
        <div class="logo-mini">
          <mat-icon>apartment</mat-icon>
          <span>RE Guide AI</span>
        </div>
        <button mat-icon-button class="notif-btn">
          <mat-icon>notifications_none</mat-icon>
        </button>
      </div>
    </header>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  showBack = false;

  constructor(private router: Router) {
    const url = this.router.url;
    this.showBack = url !== '/home' && url !== '/learn' && url !== '/assistant' && url !== '/profile';
  }

  goBack(): void {
    window.history.back();
  }
}
