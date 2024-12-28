import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class NavbarComponent {
  public isMobileMenuOpen: boolean; // Keep the type but initialize in the constructor

  constructor() {
    this.isMobileMenuOpen = false; // Initialize here
  }

  public toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
