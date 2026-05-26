import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-bottom-nav',
  imports: [CommonModule, MatIconModule],
  template: `
    <nav class="bottom-nav" *ngIf="showNav">
      <a
        class="nav-item"
        [class.active]="activeRoute === '/home'"
        (click)="navigate('/home')"
      >
        <mat-icon>home</mat-icon>
        <span>Home</span>
      </a>
      <a
        class="nav-item"
        [class.active]="activeRoute === '/learn'"
        (click)="navigate('/learn')"
      >
        <mat-icon>school</mat-icon>
        <span>Learn</span>
      </a>
      <a
        class="nav-item"
        [class.active]="activeRoute === '/assistant'"
        (click)="navigate('/assistant')"
      >
        <mat-icon>smart_toy</mat-icon>
        <span>AI</span>
      </a>
      <a
        class="nav-item"
        [class.active]="activeRoute === '/profile'"
        (click)="navigate('/profile')"
      >
        <mat-icon>person</mat-icon>
        <span>Profile</span>
      </a>
    </nav>
  `,
  styleUrls: ['./bottom-nav.component.scss']
})
export class BottomNavComponent {
  activeRoute = '';
  showNav = true;

  private hiddenRoutes = ['/splash', '/login'];

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.activeRoute = event.urlAfterRedirects;
        this.showNav = !this.hiddenRoutes.some(route => this.activeRoute.includes(route));
      });
  }

  navigate(route: string): void {
    this.router.navigate([route]);
  }
}
