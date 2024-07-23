import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtistaComponent } from './Components/artista/artista.component';
import { HomeComponent } from './Components/home/home.component';
import { SearchComponent } from './Components/search/search.component';
import { NavbarComponent } from './Components/shared/navbar/navbar.component';
// import { importType } from '@angular/compiler/src/output/output_ast';  // Esta línea no es necesaria

import { RouterModule } from '@angular/router';
//import { HttpClientModule} from "@angular/common/"

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ROUTES } from './app.routes';

import { DomseguroPipe } from './pipes/domseguro-pipe.pipe';
import { NoimagePipe } from './pipes/noimage-pipe.pipe';
import { ErrorsComponent } from './Components/shared/errors/errors.component';
import { LoadingComponent } from './Components/shared/loading/loading.component';
import { SpotifyService } from './services/services/spotify.service';
import { TarjetasComponent } from './tarjetas/tarjetas.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistaComponent,
    HomeComponent,
    SearchComponent,
    DomseguroPipe,
    NoimagePipe,
    ErrorsComponent,
    LoadingComponent,
    NavbarComponent,
    TarjetasComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES, { useHash: true })
  ],
  providers: [
    SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
