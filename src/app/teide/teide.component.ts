import { Component } from '@angular/core';

@Component({
  selector: 'app-teide',
  templateUrl: './teide.component.html',
  styleUrls: ['./teide.component.scss']
})
export class TeideComponent {
  teide: any[] = [{
    name: 'Ascención a la cumbre',
    location: 'Cumbre del Teide',
    image: 'http://www.juantoral.com/wp-content/uploads/2014/08/teide-1.jpg',
  }, {
    name: 'Observación de estrellas',
    location: 'Montaña de Guajara',
    image: 'https://www.elegant-excursions.com/wp-content/uploads/2020/05/elegant-excursions-teidescopes8.jpg',
  }]

  mySize: string = '300px'
  bigger(size: string){
    this.mySize = size;
  }
}
