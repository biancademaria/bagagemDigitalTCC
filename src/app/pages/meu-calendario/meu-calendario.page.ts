import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CalendarComponent } from 'ionic2-calendar';

@Component({
  selector: 'app-meu-calendario',
  templateUrl: './meu-calendario.page.html',
  styleUrls: ['./meu-calendario.page.scss'],
})
export class MeuCalendarioPage implements OnInit {

  eventos = [];
  visualizacaoTitulo: string;
 
  calendario = {
    modo: 'month',
    dataAtual: new Date(),
  };
 
  @ViewChild(CalendarComponent) myCal: CalendarComponent;

  constructor(
  ) { }

  ngOnInit() {}

    proximo() {
    this.myCal.slideNext();
  }
 
  anterior() {
    this.myCal.slidePrev();
  }

  quandoTituloMudar(titulo) {
    this.visualizacaoTitulo = titulo;
  }

}
