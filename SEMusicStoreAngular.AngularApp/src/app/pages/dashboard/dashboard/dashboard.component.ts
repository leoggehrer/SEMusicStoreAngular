import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from '@app-services/auth.service';
import { environment } from '@environment/environment';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  public cards = [
    { title: 'Genre', text: 'Alle Genres im Musikladen', type: '/genres', bg: 'bg-primary text-white' },
    { title: 'Künstler', text: 'Eine Übersicht von bekannten Künstlern', type: '/artists', bg: 'bg-success text-white' },
    { title: 'Albums', text: 'Eine populäre Alben', type: '/albums', bg: 'bg-success text-white' },
  ];

  constructor(
    private auth: AuthService, 
    private router: Router) {

  }

  public get requireLogin(): boolean {
    return environment.requireLogin;
  }

  public logout() {
    this.auth.logout();
    this.router.navigate(['/auth/login']);
  }
}
