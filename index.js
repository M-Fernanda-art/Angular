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

