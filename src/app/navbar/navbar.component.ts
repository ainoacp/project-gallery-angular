import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  links: string[] = ['Playas', 'Piscinas y charcos', 'Parque Nacional del Teide', 'Parque Rural de Anaga']
}
