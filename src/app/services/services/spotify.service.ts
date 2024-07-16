import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(query: string){

    const url =`https://api.spotify.com/v1/${ query }`;
 
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQAjepZ2OA27rZ6VuEjzx3gXfr-nwv6A_7STkQadOf7ugtac9oDDClbAGnr5xSNqj0xq_XahZaoZEhyqQe5MQUANJuAE9BtMEib-vrswDAtx5gSfVUo'
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
}
