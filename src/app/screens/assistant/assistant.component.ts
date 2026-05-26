import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BottomNavComponent } from '../../shared/bottom-nav/bottom-nav.component';
import { HeaderComponent } from '../../shared/header/header.component';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

@Component({
  selector: 'app-assistant',
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    BottomNavComponent,
    HeaderComponent
  ],
  template: `
    <div class="assistant-screen page-content">
      <app-header></app-header>
      
      <div class="assistant-content">
        <div class="assistant-header">
          <div class="ai-avatar">
            <mat-icon>smart_toy</mat-icon>
            <div class="status-dot"></div>
          </div>
          <div class="ai-info">
            <h2 class="ai-name">RE AI Assistant</h2>
            <p class="ai-status">Online</p>
          </div>
        </div>

        <div class="chat-container">
          <div class="message-list">
            <div class="message" *ngFor="let msg of messages" [class.user-message]="msg.sender === 'user'" [class.ai-message]="msg.sender === 'ai'">
              <div class="message-bubble">
                <p class="message-text">{{ msg.text }}</p>
                <span class="message-time">{{ msg.timestamp | date:'shortTime' }}</span>
              </div>
            </div>

            <div class="typing-indicator" *ngIf="isTyping">
              <div class="typing-bubble">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="suggested-questions" *ngIf="showSuggestions">
          <h4>Suggested Questions</h4>
          <div class="questions-grid">
            <button mat-stroked-button class="question-chip" *ngFor="let q of suggestedQuestions" (click)="sendQuestion(q)">
              {{ q }}
            </button>
          </div>
        </div>

        <div class="chat-input-bar">
          <button mat-icon-button class="mic-btn">
            <mat-icon>mic</mat-icon>
          </button>
          <mat-form-field appearance="fill" class="input-field">
            <input matInput [(ngModel)]="inputMessage" placeholder="Ask about real estate..." (keyup.enter)="sendMessage()">
          </mat-form-field>
          <button mat-icon-button class="send-btn" (click)="sendMessage()" [disabled]="!inputMessage.trim()">
            <mat-icon>send</mat-icon>
          </button>
        </div>
      </div>
    </div>
    <app-bottom-nav></app-bottom-nav>
  `,
  styleUrls: ['./assistant.component.scss']
})
export class AssistantComponent implements OnInit {
  messages: Message[] = [];
  inputMessage = '';
  isTyping = false;
  showSuggestions = true;

  suggestedQuestions = [
    'What is EC?',
    'Difference between A Khata and B Khata?',
    'How to verify land documents?',
    'What is DC Conversion?'
  ];

  private messageId = 0;

  ngOnInit(): void {
    this.addWelcomeMessage();
  }

  addWelcomeMessage(): void {
    this.messages.push({
      id: ++this.messageId,
      text: 'Hello! I am your Real Estate AI Assistant. Ask me anything about properties, land, legal procedures, or investments.',
      sender: 'ai',
      timestamp: new Date()
    });
  }

  sendQuestion(question: string): void {
    this.inputMessage = question;
    this.sendMessage();
  }

  sendMessage(): void {
    const text = this.inputMessage.trim();
    if (!text) return;

    this.messages.push({
      id: ++this.messageId,
      text,
      sender: 'user',
      timestamp: new Date()
    });

    this.inputMessage = '';
    this.showSuggestions = false;
    this.isTyping = true;

    setTimeout(() => {
      this.isTyping = false;
      this.messages.push({
        id: ++this.messageId,
        text: this.getAIResponse(text),
        sender: 'ai',
        timestamp: new Date()
      });
    }, 1500);
  }

  getAIResponse(userText: string): string {
    const lower = userText.toLowerCase();
    if (lower.includes('ec') || lower.includes('encumbrance')) {
      return 'An Encumbrance Certificate (EC) is a crucial document that shows all registered transactions related to a property. It proves that the property is free from any legal or monetary liabilities.';
    }
    if (lower.includes('khata')) {
      return 'A Khata is a legal document for property assessment in Karnataka. A Khata means the property is registered and legal. B Khata means the property has violations but pays some taxes. You should always aim for A Khata.';
    }
    if (lower.includes('verify') || lower.includes('document')) {
      return 'To verify land documents: 1) Check the title deed, 2) Verify EC for 30 years, 3) Confirm Khata status, 4) Check approved layout plans, 5) Verify with local sub-registrar office.';
    }
    if (lower.includes('dc conversion')) {
      return 'DC Conversion (Deputy Commissioner Conversion) is the process of converting agricultural land to non-agricultural use. It is mandatory before using farmland for residential or commercial purposes.';
    }
    return 'That is a great question! I would recommend checking our Learning Center for detailed guides on this topic. You can also ask a more specific question for a tailored answer.';
  }
}
