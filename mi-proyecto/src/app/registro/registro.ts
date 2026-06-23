import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './registro.html',

})
export class RegistroComponent {

  nombre: string = '';
  correo: string = '';
  registrar(): void {

    alert(

      `Nombre; ${this.nombre}
      Correo: ${this.correo}`

    );
  }
}
