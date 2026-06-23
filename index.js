// TYSCRIPT

const { version } = require("react")

// Es un lenguaje de programación creado por Microsoft que extiende Javascript. La principal diferencia 
// es que TypeScript agrega tipos de datos, lo que ayuda a detectar errores antes de ejecutar el programa.
// Sirve para detectar errores antes de ejecutar, escribir código más organizado, trabajar en proyectos grandes, 
// facilitar el trabajo en equipo, mejorar el autocompletado en VS Code.

// TIPOS DE DATOS

// String: 
// let nombre: string = "Fernanda";

// Number:
// let edad: number = 18;

// Boolean
// let activo: boolean = true;

// Array
// let frutas: string[] = ["Manzana", "Pera"];

// Funciones
// function saludar(nombre: string): string {
//     return "Hola " + nombre;
// }

// Interfaces
// Permite definir la estructura de un objeto.

// interface Usuario {
//     nombre: string;
//     edad: Number;
// }

// const usuario: Usuario = {
//     nombre: "Fernanda";
//     edad: 18
// };

// Es muy común usar TypeScript con:
// Node.js
// Express
// MongoDB
// Angular
// React
// NestJS

// INSTALACIÓN

// npm install -g typescript
// tsc --version

// CREAR UN ARCHIVO
// app.ts

// const mensaje: string = "Hola TypeScript";
// console.log(mensaje);

// CONVERTIR A JAVASCRIPT

// TypeScript no se ejecuta directamente en el navegador o Node.js primero se compila:

// tsc app.tsc

// Genera
// app.js

// node app.js

// TypeScript es JavaScript con tipos de datos y herramientas adicionales para evitar errores. Es muy usado en proyectos
// profesionales porque hace el código más seguro y fácil de mantener.



// TIPAR VARIABLES Y FUNCIONES

// En TypeScript tipicar significa indicar que tipo de dato puede almacenar una variable o recibir/devolver una función.

// TIPAR VARIABLES

// String

// let nombre: string = "Daniel";


// Number

// let edad: number = 38;


// Boolean

// let activo: boolean = true;


// Array

// let frutas: string[] = ["Manzana", "Pera", "Banano"];


// Objeto

// let usuario: {
//     nombre: string;
//     edad: number;
// } = {
//     nombre: "Jenny",
//     edad: 29
// };


// TIPAR FUNCIONES

// Función que recibe parametros y devuelve string

// function saludar(nombre: string): string {
//     return "Hola " + nombre;
// }


// Función que devuelve number

// function sumar(a: number, b: number): number {
//     return a + b;
// }


// Funcion que no devuelve nada

// function mostrarMensaje(mensaje: string): void {
//     console.log(mensaje);
// }

// Void signiofica que no retorna ningún valor.


// Funciones flecha 

// const multiplicar =(a: number, b: number): number => {
//     return a * b;
// };


// Interfaces

// Cuando hay muchos objetos similares:

// interface Producto {
//     nombre: string;
//     precio: number;
// }


// Usar la interfaz

// const producto: Producto = {
//     nombre: "Laptop",
//     precio: 2500
// };



// TIPOS DE DATOS

// String: Almacena texto

// let materia: string = "Matematicas";


// Number: Almacena números enteros o decimales

// let personasCurso: number = 34;
// let precio: number = 15800;


// Boolean: Solo puede ser true o false

// let activo: boolean = true;
// let aprobado: boolean = false;


// Array: Almacena listas de datos

// let frutas: string[] = ["Manzana", "Pera", "Banano"];
// let numeros: number[] = [1, 2, 3, 4];


// Tuple: Array con posiciones y tipos definidos.

// let usuario: [String, number] = ["Canada", 30];


// Any: Puede almacenar cualquier tipo de dato.

// let dato: any = "Hola ";
// dato = 100;
// dato = true;

// Se recomienda usarlo lo menos posible porque pierde las ventajas de TypeScript


// Unknown: Similar a any, pero más seguro

// let valor: unknown = "Hola";


// Null: Representa ausencia intencional de valor

// let respuesta: null = null;


// Undefined: Variable sin valor asignado

// let resultado: undefined = undefined;


// Object: Representa objetos

// let persona: object = {
//     nombre: "Camila",
//     edad: 45
// };


// Interface: Define la estructura de un objeto

// interface persona {
//     nombre: string;
//     edad: number;
// }


// Union types: permite varios tipos

// let codigo: string | number;
// codigo = "ABC123";
// codigo = 123;


// Void: Se usa en funciones que no retornan nada

// function mostrarMensaje(): void {
//     console.log("Hola");
// }


// BUENAS PRACTICAS

// 1. Evitar any

// 2. Usar nombres descriptivos

// Error: let x: number = 25;

// Correcto: let edadUsuario: number = 25;

// 3. Usar const cuando el valor no cambia

// Error: let nombre: string = "Zharith";

// Correcto: const nombre: string = "Zharith";

// 4. Crear interfaces para objetos

// Error: const usuario = {
//     nombre: "Camila",
//     edad: 30
// };

// Correcto: interface Usuario {
//     nombre: string;
//     edad: number;
// }

// const usuario: Usuario = {
//     nombre: "Camila",
//     edad: 30
// };

// 5. Tipar parametros y retornos de funciones

// Error: function sumar(a, b) {
//     return a + b;
// }

// Correcto: function sumar(a: number, b: number): number {
//     return a + b;
// }

// 6. Mantener funciones pequeñas

// Error: function procesarUsuario() {
//     registrar
//     validar
//     enviar correo
//     guardar
// }

// Correcto: function validarUsuario() {}
// function guardarUsuario() {}
// function enviarCorreo() {}

// 7. Usar === en lugar de ==

// Error: if (edad == 18)

// Correcto: if (edad === 18)

// 8. Evitar codigo duplicado

// Error: const impuestoLaptop = 2500 * 0.19;
// const impuestoMouse = 80 * 0.19;

// Correcto: function calcularImpuesto(precio: number): number {
//     return precio * 0.19;
// }

// 9. Organizar el codigo

// src/
// models/
// interfaces/
// routes/
// controllers/
// app.ts

// 10. Comentar solo cuando sea necesario

// Error: variable para guardar el nombre
// const nombre = "Daniela";

// Correcto: const nombreUsuario = "Daniela";

// 11. Manejar errores

// try {
//     const resultado = JSON.parse(texto);
// } catch (error) {
//     console.log("Error al procesar datos");
// }

// 12. Mantener un formato consistente

// function saludar(nombre: string): string {
//     return `Hola ${nombre}`;
// }




// QUE ES ANGULAR CLI

// Command Line Interface es una herramienta de linea de comandos que facilita createRef, ejecutar, probar y 
// administrar proyectos de Angular.
// En lugar de crear todos los archivos manualmente, Angular CLI los genera automaticamente.

// Con Angular puedes:
// - Crear proyectos Angular
// - Crear componentes
// - Crear servicios
// - Ejecutar la aplicacion
// - Compilar el proyecto
// - Ejecutar pruebas
// - Generar codigo automaticamente

// INSTALACION

// Se debe tener instalado Node.js

// npm install -g @angular/cli


// Verificar instalación

// ng version o ng --version


// Crear un proyecto

// ng new mi-proyecto

// Se creará automaticamente:
// mi proyecto/

// src/
// node_modules/
// angular.json
// package.json
// tsconfig.json

// Entrar al proyecto

// cd mi-proyecto


// Ejecutar la aplicación

// ng serve

// Despues abre:
// http://localhost:4200


// Crea un componente

// ng generate component usuario o ng g c usuario

// Genera:
// usuario/

// usuario.component.ts
// usuario.component.html
// usuario.component.css
// usuario.component.spec.ts


// Crear un servicio

// ng generate service usuario o ng g s usuario


// Compilar el proyecto

// ng build

// Genera una carpeta:

// dist/


// COMANDOS MAS USADOS

// ng new proyecto = crear proyecto
// ng serve = Ejecutar aplicación
// ng build = Compilar proyecto
// ng generate component nombre = Crear componente
// ng generate service nombre = Crear servicio
// ng test = Ejecutar pruebas
// ng version = Ver versión instalada


// Angular CLI es la herramienta oficial de Angular que automatiza la creación y administración de proyectos. 
// Es como un "asistente" que genera archivos, ejecuta la aplicación y facilita el desarrollo sin tener que configurar 
// todo manualmente.




// COMANDOS 

// Verificar version = ng version 
// Crear proyecto nuevo = ng new mi-proyecto
// Entrar al proyecto = cd mi-proyecto
// Ejecutar la aplicacion = ng serve
// Ejecutar y abrir automaticamente el navegador = ng serve --open
// Crear un componente = ng generate component nombre
// Crear un servicio = ng generate service nombre
// Crear una directiva = ng generate directive nombre
// Crear un pipe = ng generate pipe nombre
// Crear una interfaz = ng generate interface nombre
// Crear una clase = ng generate class nombre
// Crear un modulo = ng generate module nombre
// Compilar el proyecto = ng build 
// Ejecutar pruebas unitarias = ng test
// Ejecutar pruebas end-to-end = ng e2e
// Analizar el proyecto = ng lint
// Actualizar Angular = ng update
// Ver ayuda de Angular CLI = ng help


// STANDALONE COMPONENTS

// Son componentes que pueden funcionar por si solos, sin necesidad de declararlos dentro de un modulo (NgModule).
// Fueron introducidos en Angular para simplificar la estructura de las aplicaciones.

// Antes en Angular habia que declararlo 
// @NgModule({
//     declarations: [
//         AppComponent,
//         UsuarioComponent
//     ]
// })
// export class AppModule {}

// Ahora el componente se declara como independiente
// import { Component } from '@angular/core';

// @Component({
//     selector: 'app-usuario',
//     standalone: true,
//     template: '<h1>Hola Angular</h1>'
// })
// export class UsuarioComponent {}

// Observa:
// standalone: true

// Eso le indica a Angular que el componente no necesita estar en un modulo.

// VENTAJAS

// - Menos archivos
// - Codigo mas simple
// - Mejor rendimiento
// - Mas facil de reutilizar

// COMO CREARLO

// ng generate component usuario --standalone

// IMPORTAR MODULOS DE ANGULAR

// import { CommonModule } from '@angular/common';

// @Component({
//   standalone: true,
//   imports: [CommonModule]
// })
// export class UsuarioComponent {}


// CREAR UN PORYECTO USANDO STANDALONE

// ng new mi-proyecto

// Al crear el proyecto, normalmente preguntará si deseas usar Standalone Components.

// Los standalone Components son componentes independientes que eliminan la necesidad de usar modulos (NgModule) para muchas tareas. Angular los promueve porque hacen las aplicaciones más simples, modernas y faciles de mantener.




// ESTRUCTURA DE UN PROYECTO

// Cuando creas un proyecto con:

// ng new mi-proyecto

// Angular genera una estructura de carpetas y archivos organizada.


// ESTRUCTURA GENERAL 

// mi-proyecto/
// │
// ├── node_modules/
// ├── src/
// ├── .angular/
// ├── .vscode/
// ├── angular.json
// ├── package.json
// ├── package-lock.json
// ├── tsconfig.json
// └── README.md

// node_modules

// node_modules/

// Contiene todas las dependencias instaladas con npm.

// Ejemplos:
// Angular
// TypeScript
// RxJS

// Nunca se sube a GitHub, se agrega al .gitignore

// SRC

// Es la carpeta más importante, aqui esta el codigo de la aplicacion

// src/
// │
// ├── app/
// ├── assets/
// ├── index.html
// ├── main.ts
// ├── styles.css
// └── favicon.ico

// APP 

// Contiene componentes, servicios, interfaces y logica de la aplicacion

// app/
// │
// ├── app.component.ts
// ├── app.component.html
// ├── app.component.css
// └── app.routes.ts

// APP.COMPONENTS.TS

// Componente principal

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html'
// })
// export class AppComponent {
// }

// Es el punto de entrada visual de la aplicacion

// APP.COMPONENT.HTML

// Contiene el HTML principal

// <h1>Hola Angular</h1>

// APP.COMPONENT.CSS

// Contiene estilos del componente

// h1 {
//     color: blue;
// }

// APP.ROUTES.TS

// Define rutas

// export const routes = [
//     {
//         path: '',
//         component: InicioComponent
//     }
// ];

// ASSETS

// Guarda recursos estaticos

// assets/
// │
// ├── images/
// ├── videos/
// └── documentos/

// Ejemplos:
// Imagenes
// PDFs
// Iconos

// INDEX.HTML

// Pagina principal que carga Angular

// <body>
//   <app-root></app-root>
// </body>

// Angular reemplaza app-root por el contenido de la aplicacion

// MAIN.TS

// Punto de inicio de Angular

// bootstrapApplication(AppComponent);

// Es el primer archivo que se ejecuta

// STYLES.CSS

// Estilos globales

// body {
//     margin: 0;
// }

// Afectan toda la aplicacion

// ANGULAR.JSON

// Archivo de configuracion del proyecto

// Define:
// Compilación
// Estilos
// Assets
// Configuracion de Angular

// PACKAGE.JSON

// Guarda información del proyecto

// {
//   "name": "mi-proyecto",
//   "dependencies": {
//     "@angular/core": "^20.0.0"
//   }
// }

// TSCONFIG.JSON

// Configuracion de TypeScript

// Define
// Reglas de compilacion
// Version de JavaScript
// Opciones de tipado

// ESTRUCTURA TIPICA DE UN PROYECTO REAL

// src/
// │
// ├── app/
// │   ├── components/
// │   ├── services/
// │   ├── interfaces/
// │   ├── models/
// │   ├── pages/
// │   └── app.routes.ts
// │
// ├── assets/
// │   ├── images/
// │   └── icons/
// │
// ├── styles.css
// ├── index.html
// └── main.ts


// NOTA: Creé dos ejemplos, uno de registro y otro de productos.