import { Component } from '@angular/core';

@Component({
  selector: 'app-anaga',
  templateUrl: './anaga.component.html',
  styleUrls: ['./anaga.component.scss']
})
export class AnagaComponent {
  anaga: any[] = [{
    name: 'Sendero de Los Sentidos',
    location: 'Cruz del Carmen',
    image: 'https://www.tenerife.com/web_images/uploads/poi/images/1044/los-sentidos-1.jpg',
  }, {
    name: 'Sendero El Bosque Encantado',
    location: 'Reserva Natural El Pijaral',
    image: 'https://canariaslife.com/wp-content/uploads/2021/04/El-Bosque-Encantado-de-Anaga_CL_.jpg',
  }]

  mySize: string = '300px'
  bigger(size: string){
    this.mySize = size;
  }
}
