import { Component } from '@angular/core';


interface MenuItem {
  ruta: string;
  nombre: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

menu : MenuItem[] = [
  {
    ruta:'/inicio',
    nombre:'Goty'
  },
  {
    ruta:'/goty',
    nombre:'Votar'
  }
]


}
