
//---------------------lista de imagenes-------------------------
var imagenes = [ 'vi-arcane.jpg', 'detective-pikachu.jpg', 'gods-of-war.jpg', 'Kimetsu no Yaiba.jpg', 'myers.jpg', 'pennywise.jpg', 'rick-and-morty.jpg', 'star-wars.jpg', 'abominables.jpg', 'free-guy.jpg' ]

const carousel = document.getElementById('carousel');

const imagen = imagenes[0]

imagenes.forEach((imagen) => {
    const div = document.createElement('div');
    div.classList.add('pelicula');
    const img = document.createElement('img');
    img.src = `img/${imagen}`;
    div.appendChild(img);
    carousel.appendChild(div);
});

//-------------Constantes de Animacion-------------------------

const fila = document.querySelector('.contenedor-carousel');
const peliculas = document.querySelectorAll('.pelicula');

const flechaizquierda = document.getElementById('flecha-izquierda');
const flechaderecha = document.getElementById('flecha-derecha');

//--------------cambio de background--------------------------




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