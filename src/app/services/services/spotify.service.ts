import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  getQuery(query: string){

    const url =`https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQB2xm8h_uwqQF-94iDd4XRBbBk-yoGI6LHrd65-0RMnHz0yMK8w6Fut6x5UP7yuEsjatHlkQwFHd1I9lu8PdB01D1wHL5AIF9hOfO4ZXLP9Kl0fR5Q'
    });

    return this.http.get(url, {headers});
  }

  getNewRelease () 
    {
      return this.getQuery('browse/new-releases?limit=20').pipe( map( (data: any) =>{
        return data['albums'].items;      
       }))
    }

  getArtistas (termino: string)
    {
      return this.getQuery(`search?q=${termino}&type=artist&limit=20`).pipe( map( (data:any) =>{
        return data['artists'].items;
      }))
   
    }
  getArtista(id: string) {
      return this.getQuery(`artists/${id}`);
    }
    
  getTopTracks(id: string) {
      return this.getQuery(`artists/${id}/top-tracks?country=US`)
        .pipe(map((data: any) => data['tracks']));
    }
    

  constructor(private http: HttpClient) { }
  
}
