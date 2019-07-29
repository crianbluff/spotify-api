import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { HomeComponent } from './components/home/home.component';
import { CardsComponent } from './components/cards/cards.component';
import { ArtistComponent } from './components/artist/artist.component';
import { SearchComponent } from './components/search/search.component';

// Rutas
import { ROUTES } from './app.routes';

// Pipes
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { NoAudioPipe } from './pipes/noaudio.pipe';
import { NoimagePipe } from './pipes/noimage.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoadingComponent,
    HomeComponent,
    CardsComponent,
    ArtistComponent,
    SearchComponent,
    DomseguroPipe,
    NoAudioPipe,
    NoimagePipe
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES, { useHash: true } )
  ],

  providers: [],

  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }