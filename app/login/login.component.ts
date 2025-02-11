import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true, // Indicates this is a standalone component
  imports: [CommonModule, FormsModule], // Include FormsModule here
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  role: string = '';

  constructor(private router: Router) {}

  login() {
    if (this.username && this.password) {
      if (this.role === 'admin') {
        this.router.navigate(['/admin']);
      } else if (this.role === 'user') {
        this.router.navigate(['/user']);
      } else {
        alert('Invalid role selected!');
      }
    } else {
      alert('Please enter username, password, and select a role!');
    }
  }
}
