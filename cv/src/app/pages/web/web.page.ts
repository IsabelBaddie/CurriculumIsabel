import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonFooter } from '@ionic/angular/standalone';
import { NavigationService } from '../../services/navigation.service'; //SERVICIOS 
@Component({
  selector: 'app-web',
  templateUrl: './web.page.html',
  styleUrls: ['./web.page.scss'],
  standalone: true,
  imports: [IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonFooter]
})
export class WebPage implements OnInit {

  ngOnInit() {
  }

  constructor(private navigationService: NavigationService) {}
  
  
  goToInicio() {
    this.navigationService.navToHome(); 
  }
  goToProyectosMultiplataforma() {
  this.navigationService.navToProyectosMultiplataforma(); 
  }
  goToProyectosApp() {
  this.navigationService.navToProyectosApp(); 
  }
  goToProyectosWeb() {
  this.navigationService.navToProyectosWeb(); 
  }

  goToLinkedIn() {
  window.open('https://www.linkedin.com/in/isabel-carrasco-gallego', '_blank');
}

}
