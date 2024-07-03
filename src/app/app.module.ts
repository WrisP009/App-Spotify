import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ErrorsComponent } from './components/sharel/errors/errors.component';
import { LoadingComponent } from './components/sharel/loading/loading.component';
import { NabvarComponent } from './components/sharel/nabvar/nabvar.component';
//import { DomseguroPipePipe } from './pipes/domseguro-pipe.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { NoimagePipe } from './pipes/noimage.pipe';
import { SpotifyService } from './services/services/spotify.service';

import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http'
import {ROUTES} from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    ArtistaComponent,
    HomeComponent,
    SearchComponent,
    ErrorsComponent,
    LoadingComponent,
    NabvarComponent,
    //DomseguroPipePipe,
    DomseguroPipe,
    NoimagePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, {useHash: true}),
    //AppRoutingModule
  ],
  providers: [
    SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
