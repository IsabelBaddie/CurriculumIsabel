import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonFooter, IonButton, IonAlert, IonRow, IonCol,
   IonSegment, IonSegmentButton, IonCard, IonCardHeader, IonGrid, IonList, IonItem, IonLabel, 
   IonCardTitle,
   IonCardContent,
   IonAccordionGroup} from '@ionic/angular/standalone';
import { NavigationService } from '../../services/navigation.service'; //SERVICIOS 
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonLabel, IonItem, IonGrid, IonCardHeader, IonCard, IonSegmentButton, IonSegment, IonCol, IonRow, IonAlert,
     IonButton, IonFooter, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonCardTitle, IonCardContent, 
     IonAccordionGroup, IonCard, IonCardHeader, IonCardContent , 
     ],
     schemas: [CUSTOM_ELEMENTS_SCHEMA], 
})
export class HomePage {

constructor(private navigationService: NavigationService) {}


  categoriaSeleccionadaId: string = 'web';

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
  

