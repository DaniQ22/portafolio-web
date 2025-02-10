import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  isActiveMenu: boolean = false;

  toggleMenu() {
    this.isActiveMenu = !this.isActiveMenu;
    console.log('Menu state:', this.isActiveMenu); // Para debugging

  }

}
