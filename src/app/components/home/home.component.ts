import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from 'src/app/services/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  paises: any[] = [];
  nuevasCanciones: any[] = [];
  loading: boolean = true; // Propiedad loading añadida

  constructor(private http: HttpClient, private spotifyService: SpotifyService) { 

  }

  ngOnInit(): void {
    this.spotifyService.getNewRelease().subscribe((data: any) => {
      this.nuevasCanciones = data;
      this.loading = false; // Cuando se obtienen los datos, detener el loading
      console.log('Nuevas Canciones:', this.nuevasCanciones);
    });
  }
}