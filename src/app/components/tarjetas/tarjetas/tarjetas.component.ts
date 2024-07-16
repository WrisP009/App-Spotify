import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent{
  @Input() items: any[] = [];
  @Input() item: any[] = [];


  constructor(private router:Router) { }

  verArtista(dato:any){}
  
  
}
