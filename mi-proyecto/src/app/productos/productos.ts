import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Producto {
  nombre: string;
  precio: number;
}

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.html'
})
export class ProductosComponent {

  listaProductos: Producto[] = [
    {
      nombre: 'Laptop',
      precio: 2500
    },
    {
      nombre: 'Mouse',
      precio: 80
    },
    {
      nombre: 'Teclado',
      precio: 150
    }
  ];

}