import { Injectable } from '@angular/core';
import { Router } from '@angular/router'; // Importamos Router (servicio de Angular) para la navegación entre rutas

@Injectable({
  providedIn: 'root'
})
export class NavigationService {



  // Constructor de la clase que inyecta el servicio Router
  constructor(private router: Router) { }

  /* .navigate es un método del Router que permite navegar a una ruta específica 
  Internamente cambia la vista sin recargar la página (SPA: Single Page Application).
  */

  navToHome() {
    this.router.navigate(['/home']);
  }

  navToTecnologias() {
    this.router.navigate(['/tecnologias']);
  }

  navToProyectosWeb() {
    this.router.navigate(['/web']);
  }

  navToProyectosApp() {
    this.router.navigate(['/aplicaciones']);
  }

  navToProyectosMultiplataforma() {
     this.router.navigate(['/multiplataforma']);
  }

}
