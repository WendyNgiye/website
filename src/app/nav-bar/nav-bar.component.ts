import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {
  isMenuOpen = false; // State for menu visibility
  screenWidth!: number;

  ngOnInit() {
    this.screenWidth = window.innerWidth; // Initial screen width
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth > 768) {
      this.isMenuOpen = false; // Close menu when resizing to larger screens
    }
  }
  
}
