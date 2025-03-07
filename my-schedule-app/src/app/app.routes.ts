import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegistrationComponent } from './pages/registration/registration.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, // Default route (Home)
    { path: 'register', component: RegistrationComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' } // Redirect unknown routes to home

];

