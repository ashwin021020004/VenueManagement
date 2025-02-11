import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  imports: [FormsModule, CommonModule],
})
export class UserComponent {
  venues = [
    { name: 'Auditorium A', capacity: 100 },
    { name: 'Conference Room 1', capacity: 20 },
    { name: 'Seminar Hall B', capacity: 50 },
    { name: 'Open Ground', capacity: 500 },
  ];

  form = {
    rollNo: '',
    name: '',
    email: '',
    contact: '',
    venue: '',
    date:'',
    time: '',
    reason: '',
  };

  currentSection = 'venues'; // Default section

  constructor(private router: Router) {}

  showSection(section: string) {
    this.currentSection = section;
  }

  bookVenue() {
    if (this.form.venue) {
      alert(`Venue "${this.form.venue}" booked successfully by ${this.form.name}!`);
      console.log('Booking Details:', this.form);
      this.resetForm();
    } else {
      alert('Please select a venue to book!');
    }
  }

  resetForm() {
    this.form = {
      rollNo: '',
      name: '',
      email: '',
      contact: '',
      venue: '',
      date:'',
      time: '',
      reason: '',
    };
  }

  logout() {
    this.router.navigate(['/login']); // Navigate back to the login page
  }
}
