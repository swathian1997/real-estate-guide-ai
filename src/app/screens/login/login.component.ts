import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule
  ],
  template: `
    <div class="login-screen">
      <div class="login-content">
        <div class="brand-header">
          <div class="logo-small">
            <mat-icon>apartment</mat-icon>
          </div>
          <h2 class="brand-title">Real Estate Guide AI</h2>
          <p class="brand-subtitle">Sign in to continue</p>
        </div>

        <div class="glass-card login-form">
          <mat-form-field appearance="fill" class="full-width">
            <mat-label>Email</mat-label>
            <input matInput type="email" [(ngModel)]="email" placeholder="Enter your email">
            <mat-icon matSuffix>email</mat-icon>
          </mat-form-field>

          <mat-form-field appearance="fill" class="full-width">
            <mat-label>Password</mat-label>
            <input matInput [type]="hidePassword ? 'password' : 'text'" [(ngModel)]="password" placeholder="Enter your password">
            <button mat-icon-button matSuffix (click)="hidePassword = !hidePassword">
              <mat-icon>{{ hidePassword ? 'visibility_off' : 'visibility' }}</mat-icon>
            </button>
          </mat-form-field>

          <button mat-flat-button class="gold-button full-width login-btn" (click)="onLogin()">
            Sign In
          </button>

          <div class="divider">
            <span>or continue with</span>
          </div>

          <button mat-stroked-button class="social-btn full-width" (click)="onGoogleLogin()">
            <img src="https://www.google.com/favicon.ico" alt="Google" class="social-icon">
            Continue with Google
          </button>
        </div>

        <div class="login-footer">
          <a class="text-link">Forgot password?</a>
          <p class="signup-text">
            Don't have an account? <a class="text-link">Create Account</a>
          </p>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = '';
  password = '';
  hidePassword = true;

  constructor(private router: Router) {}

  onLogin(): void {
    this.router.navigate(['/home']);
  }

  onGoogleLogin(): void {
    this.router.navigate(['/home']);
  }
}
