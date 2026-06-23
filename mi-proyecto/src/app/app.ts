import { Component } from '@angular/core';
import { ProductosComponent } from './productos/productos';
import { RegistroComponent } from './registro/registro';

@Component({
  selector: 'app-root',
  imports: [
    ProductosComponent,
    RegistroComponent
  ],
  templateUrl: './app.html'
})
export class App {
}
