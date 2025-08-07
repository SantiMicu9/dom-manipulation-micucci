# Manipulación de DOM

Este proyecto consiste en una mini-aplicación web que permite crear, editar y eliminar tarjetas de producto de manera dinámica, utilizando JavaScript para manipular el DOM.

## Instrucciones de Instalación

1. Clonar este repositorio:
   https://github.com/SantiMicu9/dom-manipulation-micucci

2. Abrir el archivo `index.html` en tu navegador.

## Uso

### Crear Tarjetas

Clickear el botón con el símbolo "+" para crear una nueva tarjeta. Esta se creará con una imagen vacía, un título y una descripción.

### Editar Tarjetas

Cada tarjeta incluye su propio botón de edición ("✎ Editar"). Al clickearlo, podés editar los campos y guardar los cambios con "GUARDAR" o cancelarlos con "CANCELAR".

### Eliminar Tarjetas

Cada tarjeta tiene un botón "× Eliminar" que al clickearlo elimina únicamente esa tarjeta del DOM.

## Estructura del Proyecto

```
dom-manipulation-micucci/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── app.js
├── assets/
│   └── (imágenes opcionales)
├── README.md
└── .gitignore
```

## Tecnologías

* HTML5
* CSS3 
* JavaScript ES6+

## Decisiones de Diseño

* Se utiliza `document.createElement` para construir tarjetas desde JavaScript.
* Cada tarjeta es un contenedor (`div.card`) que incluye elementos `img`, `h2`, `p`, y botones propios.
* Las funciones `appendChild`, `replaceChild` y `remove()` fueron utilizadas para insertar, reemplazar o quitar elementos del DOM.

## Retos y Aprendizajes

En este proyecto se aprendí cómo manipular estructuras HTML utilizando únicamente JavaScript, creando etiquetas, agregando clases o modificando propiedades. Todo esto se logró con funciones programadas que se activaban mediante eventos específicos que podían ser utilizados desde el mismo programa en funcionamiento.

En este proyecto aprendí a cómo manipular estructuras HTML exclusivamente con JavaScript, generando etiquetas, añadiendo clases y modificando propiedades. Todo esto se consiguió con funciones diseñadas para activarse a través de eventos específicos, los cuales podían ser utilizados directamente desde el programa en ejecución.

## Capturas de pantalla 
![alt text](<Screenshot 2025-08-07 at 01-46-12 DOM.png>)