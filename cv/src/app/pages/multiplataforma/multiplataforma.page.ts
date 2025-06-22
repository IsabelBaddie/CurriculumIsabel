import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonContent, IonFooter, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { NavigationService } from '../../services/navigation.service'; //SERVICIOS 
@Component({
  selector: 'app-multiplataforma',
  templateUrl: './multiplataforma.page.html',
  styleUrls: ['./multiplataforma.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonFooter, IonButton]
  
})
export class MultiplataformaPage implements OnInit {


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
