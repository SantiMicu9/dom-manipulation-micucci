const cards = document.getElementById('cards');

// Botón para agregar nuevas tarjetas
const botonAgregar = document.querySelector('.btnAgregar');

// Función para crear y agregar una nueva tarjeta
function agregarElemento() {
    // Crear contenedor de la tarjeta
    const nuevaCard = document.createElement('div');
    nuevaCard.classList.add('card');

    // Crear imagen 
    const imagenCard = document.createElement('img');
    imagenCard.src = "#";

    // Crear título
    const tituloCard = document.createElement('h2');
    tituloCard.textContent = "Título";

    // Crear descripción
    const descripcionCard = document.createElement('p');
    descripcionCard.textContent = "Descripción";

    // Crear botón de edición
    const btnEditar = document.createElement('button');
    btnEditar.textContent = "✎ Editar";
    btnEditar.classList.add('editar');
    btnEditar.addEventListener('click', () => modificarElemento(nuevaCard));

    // Crear botón de eliminación
    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = "× Eliminar";
    btnEliminar.classList.add('eliminar');
    // Eliminar la tarjeta actual al hacer clic
    btnEliminar.addEventListener('click', () => nuevaCard.remove());

    // Agregar todos los elementos a la tarjeta
    nuevaCard.append(imagenCard, tituloCard, descripcionCard, btnEditar, btnEliminar);
    // Agregar la tarjeta al contenedor principal
    cards.appendChild(nuevaCard);
}

// Función para modificar los elementos
function modificarElemento(card) {
    const imagen = card.querySelector('img');
    const titulo = card.querySelector('h2');
    const descripcion = card.querySelector('p');

    const inputImagen = document.createElement('input');
    inputImagen.classList.add('EditarImagen');
    inputImagen.placeholder = imagen.src;

    const inputTitulo = document.createElement('input');
    inputTitulo.classList.add('EditarTitulo');
    inputTitulo.placeholder = titulo.textContent;

    const inputDescripcion = document.createElement('input');
    inputDescripcion.classList.add('EditarDescripcion');
    inputDescripcion.placeholder = descripcion.textContent;

    card.replaceChild(inputImagen, imagen);
    card.replaceChild(inputTitulo, titulo);
    card.replaceChild(inputDescripcion, descripcion);

    // Crear y agregar botón para guardar cambios
    const botonGuardar = document.createElement('button');
    botonGuardar.textContent = 'GUARDAR';
    botonGuardar.classList.add('guardar');
    botonGuardar.addEventListener('click', () => guardar(card));

    // Crear y agregar botón para cancelar edición
    const botonCancelar = document.createElement('button');
    botonCancelar.textContent = 'CANCELAR';
    botonCancelar.classList.add('cancelar');
    botonCancelar.addEventListener('click', () => cancelar(card));

    card.append(botonGuardar, botonCancelar);
}

// Función para guardar los nuevos valores
function guardar(card) {
    const inputImagen = card.querySelector('.EditarImagen');
    const inputTitulo = card.querySelector('.EditarTitulo');
    const inputDescripcion = card.querySelector('.EditarDescripcion');

    const nuevaImagen = document.createElement('img');
    nuevaImagen.src = inputImagen.value || inputImagen.placeholder;

    const nuevoTitulo = document.createElement('h2');
    nuevoTitulo.textContent = inputTitulo.value || inputTitulo.placeholder;

    const nuevaDescripcion = document.createElement('p');
    nuevaDescripcion.textContent = inputDescripcion.value || inputDescripcion.placeholder;

    // Reemplazar inputs por los nuevos
    card.replaceChild(nuevaImagen, inputImagen);
    card.replaceChild(nuevoTitulo, inputTitulo);
    card.replaceChild(nuevaDescripcion, inputDescripcion);

    card.querySelector('.guardar').remove();
    card.querySelector('.cancelar').remove();
}

// Función para cancelar la edición
function cancelar(card) 
{
    const inputImagen = card.querySelector('.EditarImagen');
    const inputTitulo = card.querySelector('.EditarTitulo');
    const inputDescripcion = card.querySelector('.EditarDescripcion');

    const originalImagen = document.createElement('img');
    originalImagen.src = inputImagen.placeholder;

    const originalTitulo = document.createElement('h2');
    originalTitulo.textContent = inputTitulo.placeholder;

    const originalDescripcion = document.createElement('p');
    originalDescripcion.textContent = inputDescripcion.placeholder;

    card.replaceChild(originalImagen, inputImagen);
    card.replaceChild(originalTitulo, inputTitulo);
    card.replaceChild(originalDescripcion, inputDescripcion);

    card.querySelector('.guardar').remove();
    card.querySelector('.cancelar').remove();
}

botonAgregar.addEventListener('click', agregarElemento);