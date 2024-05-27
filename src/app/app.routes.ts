import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CasaComponent } from './casa/casa.component';
import { InformacionComponent } from './informacion/informacion.component';
import { ContactoComponent } from './contacto/contacto.component';

export const routes: Routes = [
    //Ruta a la página de inicio con el listado de casas
    { path: '', component: HomeComponent }, 
    //Ruta s uns página dinámica que muestra el contenido de la casa seleccionada
    { path: 'casa/:slug', component: CasaComponent },
    //Ruta a una página estática con información del sitio web
    { path: 'informacion', component: InformacionComponent },
    //Ruta a una página estática con un formulario de contacto
    { path: 'contacto', component: ContactoComponent },
    //Ruta por defecto (para mostrar la de inicio si no encuentra otra)
    { path: '**', component: HomeComponent }
];
