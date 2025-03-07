import { Component , input} from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  standalone: true
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  role: 'manager' | 'employee' = 'employee'; // Default role

  constructor(private authService: AuthService) {}

  async register() {
    try {
      await this.authService.register(this.email, this.password, this.role);
      console.log('User registered successfully');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  }
}
