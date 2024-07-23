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

  verArtista(item: any) {
    console.log('Item clickeado:', item);
    let artistaId;
    if (item.type === 'artist') {
      artistaId = item.id;
    } else if (item.type === 'album') {
      artistaId = item.artists[0].id;
    } else {
      console.error('Tipo de item no reconocido', item);
      return;
    }
    console.log('Navegando al artista con ID:', artistaId);
    this.router.navigate(['/artista', artistaId]).then(
      () => console.log('Navegación exitosa'),
      err => console.error('Error en la navegación:', err)
    );
  }
  
  
}
