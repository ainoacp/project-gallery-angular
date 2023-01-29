import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BeachesComponent } from './beaches/beaches.component';
import { PoolsComponent } from './pools/pools.component';
import { TeideComponent } from './teide/teide.component';
import { AnagaComponent } from './anaga/anaga.component';
import { DarkComponent } from './dark/dark.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    MainComponent,
    GalleryComponent,
    BeachesComponent,
    PoolsComponent,
    TeideComponent,
    AnagaComponent,
    DarkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
