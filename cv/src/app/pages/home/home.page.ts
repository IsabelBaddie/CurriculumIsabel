import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonFooter, IonButton, IonAlert } from '@ionic/angular/standalone';
import { NavigationService } from '../../services/navigation.service'; //SERVICIOS 

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonAlert, IonButton, IonFooter, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {

constructor(private navigationService: NavigationService) {}

goToProyectosMultiplataforma() {
this.navigationService.navToProyectosMultiplataforma(); 
}
goToProyectosApp() {
this.navigationService.navToProyectosApp(); 
}
goToProyectosWeb() {
this.navigationService.navToProyectosWeb(); 
}
goToTecnologias() {
this.navigationService.navToTecnologias(); 
}


goToLinkedIn() {
  window.open('https://www.linkedin.com/in/isabel-carrasco-gallego', '_blank');
}

}
  

