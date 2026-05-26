import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({ projectId: "real-estate-guide-ai", appId: "1:898565215588:web:835855ceec8cca96dcd671", storageBucket: "real-estate-guide-ai.firebasestorage.app", apiKey: "AIzaSyD9gINu6rehClalXttVQOTx3c8Xxirsc_c", authDomain: "real-estate-guide-ai.firebaseapp.com", messagingSenderId: "898565215588", measurementId: "G-8ZE9JWVK78" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())
  ]
};
