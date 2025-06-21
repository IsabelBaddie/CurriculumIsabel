import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tecnologias',
  templateUrl: './tecnologias.page.html',
  styleUrls: ['./tecnologias.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class TecnologiasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
