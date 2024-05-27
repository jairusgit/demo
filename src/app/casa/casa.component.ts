import { Component, inject} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import data from "../../assets/data.json"; /* Archivo con los datos de cada casa */

@Component({
  selector: 'app-casa',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, CommonModule],
  templateUrl: './casa.component.html',
  styleUrl: './casa.component.scss'
})
export class CasaComponent{

  /* Objeto con los datos de cada casa */
  items:{
    titulo:string,
    slug: string,
    imagen: string,
    fuente: string,
    fecha: string,
    entradilla: string,
    texto: string
  }[] = data;

  /* Recupero de la ruta el slug de la casa */
  activatedRoute = inject(ActivatedRoute);
  slug = this.activatedRoute.snapshot.params['slug'];

  /* Filtro los datos para extraer la casa seleccionada */
  public item = this.items.filter(o => o.slug === this.slug)[0];

  /* Título de la página*/
  title = "La Casa " + this.item.titulo;
}
