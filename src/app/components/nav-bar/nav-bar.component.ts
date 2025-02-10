import { CommonModule, NgClass, ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  constructor(private viewportScroller: ViewportScroller) { }



  isActiveMenu: boolean = false;

  toggleMenu() {
    this.isActiveMenu = !this.isActiveMenu;
    console.log('Menu state:', this.isActiveMenu); // Para debugging

  }



  scrollToElement(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

}
