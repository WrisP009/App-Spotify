import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from 'src/app/services/services/spotify.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
artistas : any[] = [];
loading: boolean = true;
  constructor(private http: HttpClient, private spotifyService: SpotifyService) { }

  ngOnInit(): void {
    this.spotifyService.getNewRelease().subscribe((data: any) => {
      this.artistas = data;
      this.loading = false; 
      console.log('Nuevos artistas:', this.artistas);
    });
  }
  buscar(termino: string){
    this.spotifyService.getArtistas(termino).subscribe((data: any) => {
      this.artistas = data;
      this.loading = false; 
      console.log('Nuevos artistas:', this.artistas);
    });
  }


}
