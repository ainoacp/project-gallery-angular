import { Component } from '@angular/core';

@Component({
  selector: 'app-beaches',
  templateUrl: './beaches.component.html',
  styleUrls: ['./beaches.component.scss']
})
export class BeachesComponent {
  beaches: any[] = [{
    name: 'Playa de Las Teresitas',
    location: 'San Andrés',
    image: 'https://cope-cdnmed.agilecontent.com/resources/jpg/7/1/1589995694617.jpg'
  },{
    name: 'Playa del Bollullo',
    location: 'La Orotava',
    image: 'https://www.barcelo.com/guia-turismo/wp-content/uploads/2020/11/tenerife_playa-bollullo_pal.jpg'
  },{
    name: 'Playa del Duque',
    location: 'Adeje',
    image: 'https://www.adeje.es/website/Contenido/cabeceras/D919-playa-del-duque_AMPL.jpg'
  }]

  mySize: string = '300px'
  bigger(size: string){
    this.mySize = size;
  }
  
  //myDisplay: string = 'flex'
  //show(display: string){
    //this.myDisplay = display;
  //}
}
