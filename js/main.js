const fila = document.querySelector('.contenedor-carousel');
const peliculas = document.querySelectorAll('.pelicula');

const flechaizquierda = document.getElementById('flecha-izquierda');
const flechaderecha = document.getElementById('flecha-derecha');

//-------------event Listener para la flecha derecha----------

flechaderecha.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;

    const indicadorActivo = document.querySelector('.indicadores .activo');
    if(indicadorActivo.nextSibling){
        indicadorActivo.nextSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo');
    }
});

//---------------event listener para la flecha izquierda----------
flechaizquierda.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;

    const indicadorActivo = document.querySelector('.indicadores .activo');
    if(indicadorActivo.previousSibling){
        indicadorActivo.previousSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo');
    }
});

//---------paginacion--------------------------------------------

const numeroPaginas = Math.ceil(peliculas.length/5);
for(let i = 0;i < numeroPaginas; i++){
    const indicador = document.createElement('button');

    if(i == 0){
        indicador.classList.add('activo');
    }

    document.querySelector('.indicadores').appendChild(indicador);
    indicador.addEventListener('click', (e) =>{
        fila.scrollLeft = i * fila.offsetWidth;

        document.querySelector('.indicadores .activo').classList.remove('activo');
        e.target.classList.add('activo');
    })
}

//------------------------mover-----------------------------------
peliculas.forEach((pelicula) => {
    pelicula.addEventListener('mouseenter', (e) => {
        const elemento = e.currentTarget;
        setTimeout(() => {
            peliculas.forEach((pelicula) => pelicula.classList.remove('hover'));
            elemento.classList.add('hover');
        }, 200);
    });
});

fila.addEventListener('mouseleave', () => {
    peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
});

//---------------------lista de imagenes-------------------------

// var imagenes = [
//     'img/vi-arcane.jpg',
//     'img/detective-pikachu.jpg',
//     'img/gods-of-war.jpg',
//     'img/Kimetsu no Yaiba.jpg',
//     'img/myers.jpg',
//     'img/pennywise.jpg',
//     'img/rick-and-morty.jpg',
//     'img/star-wars.jpg',
//     'amg/abominables.jpg',
//     'img/free-guy.jpg',
// ]

// function carousel(contenedor){
//     contenedor.addEventListener('click', e =>){

//     }

// }