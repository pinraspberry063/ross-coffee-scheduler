import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface User {
  uid: string;
  email: string;
  role: 'manager' | 'employee';
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private router: Router
  ) {}

  // Login method
  login(email: string, password: string): Promise<any> {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  // Register method with role assignment
  async register(email: string, password: string, role: 'manager' | 'employee'): Promise<any> {
    const userCredential = await this.afAuth.createUserWithEmailAndPassword(email, password);
    if (userCredential.user) {
      await this.firestore.collection('users').doc(userCredential.user.uid).set({
        email,
        role
      });
    }
  }

  // // Logout method
  // async logout(): Promise<void> {
  //   await this.afAuth.signOut();
  //   this.router.navigate(['/login']);
  // }

  // Get currently authenticated user
  getUser(): Observable<User | null> {
    return this.afAuth.authState.pipe(
      map(user => {
        if (!user) return null;
        return { uid: user.uid, email: user.email, role: 'employee' } as User; // Default role until fetched
      })
    );
  }

  // Get user role from Firestore
  getUserRole(uid: string): Observable<string | null> {
    return this.firestore.collection('users').doc(uid).valueChanges().pipe(
      map((data: any) => data?.role || null)
    );
  }
}
