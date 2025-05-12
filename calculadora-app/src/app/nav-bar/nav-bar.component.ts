import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterModule, MenubarModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Sumar',
        icon: 'pi pi-home',
        routerLink: ['/']
      },
      {
        label: 'Resta',
        icon: 'pi pi-minus',
        routerLink: ['/resta']
      }
    ];
  }

}
