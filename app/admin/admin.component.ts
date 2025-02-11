import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  standalone: true,
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  imports: [CommonModule],
})
export class AdminComponent {
  currentSection = 'venues'; // Default section

  venues = [
    { name: 'Auditorium A', capacity: 100 },
    { name: 'Conference Room 1', capacity: 20 },
    { name: 'Seminar Hall B', capacity: 50 },
    { name: 'Open Ground', capacity: 500 },
  ];

  bookingRequests = [
    {
      rollNo: '12345',
      name: 'John Doe',
      email: 'john@example.com',
      contact: '1234567890',
      venue: 'Auditorium A',
      time: '10:00 AM - 12:00 PM',
      reason: 'Seminar on AI',
    },
    {
      rollNo: '67890',
      name: 'Jane Smith',
      email: 'jane@example.com',
      contact: '0987654321',
      venue: 'Conference Room 1',
      time: '2:00 PM - 4:00 PM',
      reason: 'Project Meeting',
    },
  ];

  constructor(private router: Router) {}

  viewSection(section: string) {
    this.currentSection = section; // Change the current section
  }

  logout() {
    this.router.navigate(['/login']); // Navigate to the login page
  }

  acceptRequest(request: any) {
    alert(`Booking request by ${request.name} for ${request.venue} has been accepted.`);
    this.bookingRequests = this.bookingRequests.filter(r => r !== request);
  }

  rejectRequest(request: any) {
    alert(`Booking request by ${request.name} for ${request.venue} has been rejected.`);
    this.bookingRequests = this.bookingRequests.filter(r => r !== request);
  }
}
