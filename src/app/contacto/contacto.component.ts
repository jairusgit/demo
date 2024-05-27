import { Component, inject } from '@angular/core';

import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.scss',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule
  ]
})
export class ContactoComponent {

  /* Título de la página*/
  title = "Formulario de contacto";

  /* Campos del formulario */
  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    nombre: [null, Validators.required],
    apellidos: [null, Validators.required],
    direccion: [null, Validators.required],
    ciudad: [null, Validators.required],
    provincia: [null, Validators.required],
    codigoPostal: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],
    sexo: ['no', Validators.required]
  });

  /* Listado de provincias */
  provincias = [
    {"nombre": "Álava", "abreviatura": "VI"},
    {"nombre": "Albacete", "abreviatura": "AB"},
    {"nombre": "Alicante", "abreviatura": "A"},
    {"nombre": "Almería", "abreviatura": "AL"},
    {"nombre": "Asturias", "abreviatura": "O"},
    {"nombre": "Ávila", "abreviatura": "AV"},
    {"nombre": "Badajoz", "abreviatura": "BA"},
    {"nombre": "Barcelona", "abreviatura": "B"},
    {"nombre": "Burgos", "abreviatura": "BU"},
    {"nombre": "Cáceres", "abreviatura": "CC"},
    {"nombre": "Cádiz", "abreviatura": "CA"},
    {"nombre": "Cantabria", "abreviatura": "S"},
    {"nombre": "Castellón", "abreviatura": "CS"},
    {"nombre": "Ciudad Real", "abreviatura": "CR"},
    {"nombre": "Córdoba", "abreviatura": "CO"},
    {"nombre": "Cuenca", "abreviatura": "CU"},
    {"nombre": "Girona", "abreviatura": "GI"},
    {"nombre": "Granada", "abreviatura": "GR"},
    {"nombre": "Guadalajara", "abreviatura": "GU"},
    {"nombre": "Guipúzcoa", "abreviatura": "SS"},
    {"nombre": "Huelva", "abreviatura": "H"},
    {"nombre": "Huesca", "abreviatura": "HU"},
    {"nombre": "Illes Balears", "abreviatura": "PM"},
    {"nombre": "Jaén", "abreviatura": "J"},
    {"nombre": "La Coruña", "abreviatura": "C"},
    {"nombre": "La Rioja", "abreviatura": "LO"},
    {"nombre": "Las Palmas", "abreviatura": "GC"},
    {"nombre": "León", "abreviatura": "LE"},
    {"nombre": "Lleida", "abreviatura": "L"},
    {"nombre": "Lugo", "abreviatura": "LU"},
    {"nombre": "Madrid", "abreviatura": "M"},
    {"nombre": "Málaga", "abreviatura": "MA"},
    {"nombre": "Murcia", "abreviatura": "MU"},
    {"nombre": "Navarra", "abreviatura": "NA"},
    {"nombre": "Ourense", "abreviatura": "OR"},
    {"nombre": "Palencia", "abreviatura": "P"},
    {"nombre": "Pontevedra", "abreviatura": "PO"},
    {"nombre": "Salamanca", "abreviatura": "SA"},
    {"nombre": "Santa Cruz de Tenerife", "abreviatura": "TF"},
    {"nombre": "Segovia", "abreviatura": "SG"},
    {"nombre": "Sevilla", "abreviatura": "SE"},
    {"nombre": "Soria", "abreviatura": "SO"},
    {"nombre": "Tarragona", "abreviatura": "T"},
    {"nombre": "Teruel", "abreviatura": "TE"},
    {"nombre": "Toledo", "abreviatura": "TO"},
    {"nombre": "Valencia", "abreviatura": "V"},
    {"nombre": "Valladolid", "abreviatura": "VA"},
    {"nombre": "Vizcaya", "abreviatura": "BI"},
    {"nombre": "Zamora", "abreviatura": "ZA"},
    {"nombre": "Zaragoza", "abreviatura": "Z"}
  ];

  /* Mensaje de respuesta al enviar el formulario */
  onSubmit(): void {
    alert('¡Gracias!');
  }
}
