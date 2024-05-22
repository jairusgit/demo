import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import data from "../../assets/data.json";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatGridListModule, MatButtonModule, MatCardModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title = "Las Casas de Hogwarts";
  public items:{
    titulo:string,
    slug: string,
    imagen: string,
    fuente: string,
    fecha: string,
    entradilla: string,
    texto: string
  }[] = data;
}
