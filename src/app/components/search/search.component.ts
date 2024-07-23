import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from 'src/app/services/services/spotify.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  artistas: any[] = [];
  loadingCarga: boolean = false;

  constructor(private http: HttpClient,private spotifyService: SpotifyService) {}

  ngOnInit(): void {}

  buscar(termino: string): void {
    if (termino.trim() !== '') {
      this.loadingCarga = true; // Mostrar loading mientras se realiza la búsqueda
      this.spotifyService.getArtistas(termino).subscribe(
        (data: any) => {
          this.artistas = data;
          this.loadingCarga = false; // Ocultar loading cuando se obtienen los resultados
        },
        (error) => {
          console.error('Error al buscar artistas:', error);
          this.loadingCarga = false; // Manejar errores y ocultar loading
        }
      );
    } else {
      this.artistas = []; // Limpiar lista si el término de búsqueda está vacío
    }
  }

  getArtistImage(artista: any): string {
    return artista.images.length > 0 ? artista.images[0].src : 'ruta_por_defecto.png';
  }
}
