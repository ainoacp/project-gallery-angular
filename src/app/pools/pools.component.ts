import { Component } from '@angular/core';

@Component({
  selector: 'app-pools',
  templateUrl: './pools.component.html',
  styleUrls: ['./pools.component.scss']
})
export class PoolsComponent {
  pools: any[] = [{
    name: 'Charco de la Laja',
    location: 'San Juan de la Rambla',
    image: 'https://vendevisitaatenerife.com/wp-content/uploads/2020/10/1-Charco-La-Laja.jpg',
  }, {
    name: 'Charco del Viento',
    location: 'La Guancha',
    image: 'https://cadenaser00.epimg.net/emisora/imagenes/2015/09/25/radio_club_tenerife/1443179794_252821_1443180304_noticia_normal.jpg',
  },{
    name: 'Bajamar',
    location: 'Bajamar',
    image: 'http://www.canariasviaja.com/viajaresvivir/wp-content/uploads/2021/03/Leo-Desinquieto-Bajamar-Piscinas-naturales-en-Club-Na%CC%81utico-de-Bajamar-2000x1500.jpg',
  }]

  mySize: string = '300px'
  bigger(size: string){
    this.mySize = size;
  }
}
