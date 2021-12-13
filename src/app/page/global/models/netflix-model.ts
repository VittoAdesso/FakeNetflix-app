// De ésta manera creo modelos globales para usarlo desde el padre para luego usarlos desde los hijos

// esquema de la barra inicial de navegación 

//Interfaces con MAYÚSCULAS
export interface Nav {
   
    logo: Img; 
}

// cada imagen tendrá el siguiente esquema
export interface Img {
  
    src: string; 
    alt: string; 
}

export interface Hero{

    title: string; //usaremos para poner un título
    image: Img; //aquí voy a poner un sólo título como hace netfliz 
}

export interface Films{

    title: string; 
    galleryImgs: Img[]; 
}

// es una manera de crear tipos de variables con interfaces ya definidas arriab, lo que me ayudará a hacer un import más sencillo y rápido
export interface NetflixModel {

    //tipo y corresponde una interfaz o esquema... Interfaz global 
nav: Nav; 
hero: Hero; 
films: Films; 

}