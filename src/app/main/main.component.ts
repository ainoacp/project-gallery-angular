import { NONE_TYPE } from '@angular/compiler';
import { Component } from '@angular/core';
import { GalleryComponent } from '../gallery/gallery.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  see : boolean = true
}
