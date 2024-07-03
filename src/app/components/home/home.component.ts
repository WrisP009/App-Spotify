import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  paises: any[] = [];

  constructor(private http: HttpClient) {
 
     console.log("--- Iniciando el constructor");
     this.http.get('https://restcountries.com/v3.1/lang/spanish').subscribe((data: any) => {
       this.paises = data.map((country: any)=> ({
        name: country.name.common,
        population: country.population
       }));
       console.log("paises ->",this.paises);
    })
   
   }

  ngOnInit(): void {
  }

}
