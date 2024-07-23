import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/services/spotify.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent  {

  artista:any = {};
  cargarArtista:boolean= true;
  topTracks: any[] =[];

  constructor(private router: ActivatedRoute, private service: SpotifyService) {

    this.router.params.subscribe( params =>{
      
      this.getArtista(params['id'])
      this.getTopTracks(params['id'])

    });
   }

   getArtista( id: string){

    this.service.getArtista( id ).subscribe(response =>{
      
      this.artista = response;
      this.cargarArtista= false
    });
   }

   getTopTracks(id: string)
   {
    this.service.getTopTracks(id ).subscribe(response =>{
      console.log('top tracks ->',response);
      this.topTracks = response;
    })
   }

}
