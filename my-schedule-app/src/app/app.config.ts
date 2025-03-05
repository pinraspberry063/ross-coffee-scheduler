import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(withEventReplay()), provideFirebaseApp(() => initializeApp({ projectId: "rosshousescheduler", appId: "1:899879820908:web:5b9578c72ec89e3881c249", storageBucket: "rosshousescheduler.firebasestorage.app", apiKey: "AIzaSyA_6XQtFWENkehTBemCjuFWzTu1APoLAYs", authDomain: "rosshousescheduler.firebaseapp.com", messagingSenderId: "899879820908", measurementId: "G-CSFCJXH5BT" })), provideAuth(() => getAuth())]
};
