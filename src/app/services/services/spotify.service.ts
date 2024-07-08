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
      'Authorization' : 'Bearer BQBZxReL5QIgjkRjecrSX4elgp3XGy8Ljl-76YfLQerUVhLWbseCJ6JtI157-eDchjZn43NF-gUCG8sVKgS5p8obMpSHx7BNBvcjT3BqH4Td4Sdr2FQ'
    });

    return this.http.get(url, {headers});
  }
  getNewRelease () 
    {
      return this.getQuery('browse/new-releases?limit=20').pipe( map( (data: any) =>{
        return data['albums'].items;      
       }))
    }
}
