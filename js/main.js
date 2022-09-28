
//---------------------lista de imagenes-------------------------
var imagenes = [ 'vi-arcane.jpg', 'detective-pikachu.jpg', 'gods-of-war.jpg', 'Kimetsu-no-Yaiba.jpg', 'myers.jpg', 'IT.jpg', 'rick-and-morty.jpg', 'star-wars.jpg', 'abominables.jpg', 'free-guy.jpg' ]
var titulos = ['Arcane', 'Detective Pikachu', 'God of War', 'Kimetsu no Yaiba', 'Halloween End', 'IT', 'Rick y Morty', 'Star Wars', 'Abominables', 'Free Guy']
var descripcion = [
    'Arcane es una serie de animación basada en el exitoso videojuego League of Legends o también conocido popularmente como Lol. La historia se centra en la desigualdad de los territorios. ',
    'Tras la muerte de su padre, Tim viaja a Ryme, donde se encuentra con Pikachu, el compañero Pokémon de su padre.',
    'Un futuro sin horizontes. Atreus busca conocimiento que lo ayude a entender la profecía de "Loki" y establecer su rol en Ragnarök. Kratos debe decidir entre',
    'Tanjirô Kamado es un chico alegra cuya familia es asesinada por un demonio llamado Muzan. Él es el único superviviente, junto con su hermana Nezuko convertida ahora en demonio.',
    'El final de la nueva trilogía llega dentro de poco y para que el público se prepare para el terror, llega el último trailer de Halloween Ends.',
    'Cuando los niños de la ciudad empiezan a desaparecer, un grupo de inadaptados deberá enfrentar sus miedos y luchar contra un terrorífico payaso asesino que no da tregua.',
    'La serie sigue las aventuras Rick, y su inocente nieto Morty, quienes pasan el tiempo en las aventuras intergalácticas. Es una serie de animación para adultos que recurre a la ciencia ficción y los viajes espaciales.',
    'la princesa Leia es capturada por las tropas imperiales al mando del temible Darth Vader. Antes de ser atrapada, Leia consigue introducir un mensaje en su robot R2-D2.',
    'La joven Yi descubre a un enorme yeti en la azotea de su edificio en Shanghái. La criatura se ha escapado del laboratorio donde estaba encerrada y está siendo buscada por toda la ciudad.',
    'Un cajero de un banco descubre que en realidad es un personaje sin papel dentro de un brutal videojuego de mundo interactivo.'
]

//---------------------carrousel--------------------------------

const carousel = document.getElementById('carousel');

const imagen = imagenes[0]

imagenes.forEach((imagen, index) => {
    const div = document.createElement('div');
    div.classList.add('pelicula');
    div.setAttribute('onclick',`cambiarFondo(${index})`)
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

function cambiarFondo(id){

    const mainPrincipal = document.getElementById('main-principal');
    mainPrincipal.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5) 0%,rgba(0, 0, 0,.5) 100%), url(img/${imagenes[id]})`;
    cambiarDescripcion(id);
    cambiarTitulo(id);
}
// cambiarFondo(5);

//-----------------cambio de titulo--------------------------------
function cambiarTitulo(id){

    const titulop = document.getElementById('titulo-principal');
    titulop.innerHTML = titulos[id];
}
//-----------------cambio de Descripcion----------------------------

function cambiarDescripcion(id){

    const descripcionp = document.getElementById('descripcion');
    descripcionp.innerHTML= descripcion[id];
}

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

//----------------mover imagenes con temporizador-----------------------
setInterval(() => {
    const rand = Math.floor(Math.random() * imagenes.length);
    console.log(rand);
    cambiarFondo(rand)
}, 15000);