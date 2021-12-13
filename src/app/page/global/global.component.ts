import { Component, OnInit } from '@angular/core';
import { Films, NetflixModel } from './models/netflix-model';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.scss']
})

// para usar luego los inputs, digo que el global es el padre y el resto son los hijos, que me van a recibir los inputs sin necesidad de crear las variables ahí
export class GlobalComponent implements OnInit {

// comienzo a crear las variables, son publicas ya que quiere tener acceso a ellas y les diré que su contenido se basará a una interfaz que tengo crerada 
public netflixModel: NetflixModel; 
public keepWatching: Films; 
public yourList: Films; 
public recomendation: Films; 
public action : Films; 
public comedy : Films; 
public terror: Films; 
public scify: Films; 
public anime: Films; 
public drama: Films; 

    constructor() {
      // les doy valor

      this.netflixModel = {

            nav: {
                logo : {
                  src: "../../../assets/images/LOGO/2560px-Netflix_2015_logo.svg.png", // ver si lo cambio
                  alt:  "Logo"
                }
            }, 

            hero: {
                title: "Nº ....", 
                image: {
                        src: "../../../assets/images/Terror/malasana.webp",
                        alt: "Taquillera"
                        }
            },

            films: {
              title: "Top 10 in Spain Today", 
              galleryImgs: [  // ARRAY DE OBJETOS QUE CONTIENEN IMAGENES
                {
                  src: "../../../assets/images/Top10/1-papel.webp", 
                  alt: "1"
                },
                {
                  src: "../../../assets/images/Top10/2-reina.webp", 
                  alt: "2"
                },
                {
                  src: "../../../assets/images/Top10/3-titanes.webp", 
                  alt: "3"
                },
                {
                  src: "../../../assets/images/Top10/4-lostinspace.webp", 
                  alt: "4"
                },
                {
                  src: "../../../assets/images/Top10/5-dondecaben.webp", 
                  alt: "5"
                },
                {
                  src: "../../../assets/images/Top10/6-aquinohay.webp", 
                  alt: "6"
                },
                {
                  src: "../../../assets/images/Top10/7-blacklist.webp", 
                  alt: "7"
                },
                {
                  src: "../../../assets/images/Top10/8-ricos.webp", 
                  alt: "8"
                },
                {
                  src: "../../../assets/images/Top10/9-poder.webp", 
                  alt: "9"
                },
                {
                  src: "../../../assets/images/Top10/10-gooddoctor.webp", 
                  alt: "10"
                }
                
            ]
        }

      },

      this.keepWatching = {

          title: "Continue Watching", 
          galleryImgs: [
            {
              src: "../../../assets/images/Top10/3-titanes.webp", 
              alt: ""
            },
            {
              src: "../../../assets/images/Accion/misionimposiblenacion.webp", 
              alt: ""
            },
            {
              src: "../../../assets/images/Comedia/laterminal.webp", 
              alt: ""
            },
            {
              src: "../../../assets/images/Terror/insidious2.webp", 
              alt: ""
            }
          ]
      },

      this.yourList = {

        title: "My List", 
        galleryImgs: [
          {
            src: "../../../assets/images/Top10/1-papel.webp", 
            alt: ""
          },
          {
            src: "../../../assets/images/Comedia/scarymovie3.webp", 
            alt: ""
          },
          {
            src: "../../../assets/images/Drama/clublucha.webp", 
            alt: ""
          },
          {
            src: "../../../assets/images/Top10/6-aquinohay.webp", 
            alt: ""
          }
        ]



    },

        this.recomendation = {

          title: "Watch Again ", 
          galleryImgs: [
            {
              src: "../../../assets/images/Comedia/dictador.webp", 
              alt: ""
            },
            {
              src: "../../../assets/images/Comedia/cazafantasmas.webp", 
              alt: ""
            },
            {
              src: "../../../assets/images/Drama/millaverde.webp", 
              alt: ""
            },
            {
              src: "../../../assets/images/Sci-fi/doom.webp", 
              alt: ""
            }
          ]

        },

      this.action = {

        title: "Action", 
        galleryImgs: [
          {
            src: "../../../assets/images/Accion/ejercitomuertos.jpg", 
            alt: ""
          },
          {
            src: "../../../assets/images/Accion/elprotector.webp", 
            alt: ""
          },
          {
            src: "../../../assets/images/Accion/heat.webp", 
            alt: ""
          },
          {
            src: "../../../assets/images/Accion/equalizer2.webp", 
            alt: ""
          },
          {
            src: "../../../assets/images/Accion/jackreacher.webp", 
            alt: ""
          },
          {
            src: "../../../assets/images/Accion/johnwick2.webp", 
            alt: ""
          },
          {
            src: "../../../assets/images/Accion/killbill2.webp", 
            alt: ""
          },
          {
            src: "../../../assets/images/Accion/misionimposiblenacion.webp", 
            alt: ""
          },
          {
            src: "../../../assets/images/Accion/terminator2.webp", 
            alt: ""
          }
        ]
      }, 

        this.comedy= {

          title: "Comedies", 
          galleryImgs: [
            {
              src: "../../../assets/images/Comedia/casi300.webp", 
              alt: ""
            },
            {
              src: "../../../assets/images/Comedia/cazafantasmas.webp", 
              alt: ""
            },
            {
              src: "../../../assets/images/Comedia/dictador.webp", 
              alt: ""
            },
            {
              src: "../../../assets/images/Comedia/padresella.webp", 
              alt: ""
            },
            {
              src: "../../../assets/images/Comedia/ted2.webp", 
              alt: ""
            },
            {
              src: "../../../assets/images/Comedia/laterminal.webp", 
              alt: ""
            },
            {
              src: "../../../assets/images/Comedia/regresofuturo.webp", 
              alt: ""
            }
          ]
        }, 

        this.terror = {

          title: "Horror", 
          galleryImgs: [
            {
              src: "../../../assets/images/Terror/insidious2.webp", 
              alt: ""
            },
            {
              src: "../../../assets/images/Terror/malasana.webp", 
              alt: ""
            },
            {
              src: "../../../assets/images/Terror/reflejos.webp", 
              alt: ""
            },
            {
              src: "../../../assets/images/Terror/life.webp", 
              alt: ""
            },
            {
              src: "../../../assets/images/Terror/calleterror.jpg", 
              alt: ""
            },
            {
              src: "../../../assets/images/Terror/multiple.webp", 
              alt: ""
            }
          ]
        }, 

        this.scify = {

          title: "Sci-FY", 
          galleryImgs: [
            {
              src: "../../../assets/images/Sci-fi/12monos.webp", 
              alt: ""
            },
            {
              src: "../../../assets/images/Sci-fi/6dia.webp", 
              alt: ""
            },
            {
              src: "../../../assets/images/Sci-fi/core.webp", 
              alt: ""
            },
            {
              src: "../../../assets/images/Sci-fi/gits.webp", 
              alt: ""
            },
            {
              src: "../../../assets/images/Sci-fi/doom.webp", 
              alt: ""
            },
            {
              src: "../../../assets/images/Sci-fi/jumper.webp", 
              alt: ""
            },
            {
              src: "../../../assets/images/Sci-fi/transformers.webp", 
              alt: ""
            },
            {
              src: "../../../assets/images/Sci-fi/transformers.webp", 
              alt: ""
            }
          ]
        }, 

        this.anime = {

          title: "Anime", 
          galleryImgs: [
            {
              src: "../../../assets/images/Anime/chihiro.webp", 
              alt: ""
            },
            {
              src: "../../../assets/images/Anime/evangelion.webp", 
              alt: ""
            },
            {
              src: "../../../assets/images/Anime/gitsarise.webp", 
              alt: ""
            },
            {
              src: "../../../assets/images/Anime/gundam.webp", 
              alt: ""
            },
            {
              src: "../../../assets/images/Anime/laputa.webp", 
              alt: ""
            },
            {
              src: "../../../assets/images/Anime/mononoke.webp", 
              alt: ""
            },
            {
              src: "../../../assets/images/Anime/perfectblue.webp", 
              alt: ""
            },
            {
              src: "../../../assets/images/Anime/castilloambulante.webp", 
              alt: ""
            },
            {
              src: "../../../assets/images/Anime/ajin.jpg", 
              alt: ""
            }
          ]
        }
        this.drama = {

          title: "Drama", 
          galleryImgs: [
            {
              src: "../../../assets/images/Drama/clublucha.webp", 
              alt: ""
            },
            {
              src: "../../../assets/images/Drama/corazones.webp", 
              alt: ""
            },
            {
              src: "../../../assets/images/Drama/millaverde.webp", 
              alt: ""
            },
            {
              src: "../../../assets/images/Drama/naufrago.webp", 
              alt: ""
            },
            {
              src: "../../../assets/images/Drama/schindler.webp", 
              alt: ""
            },
            {
              src: "../../../assets/images/Drama/sombradiablo.webp", 
              alt: ""
            },
            {
              src: "../../../assets/images/Drama/unicosuperviviente.webp", 
              alt: ""
            },
            {
              src: "../../../assets/images/Drama/clublucha.webp", 
              alt: ""
            },
            {
              src: "../../../assets/images/Drama/arrival.webp", 
              alt: ""
            }
          ]
        }

    }

    ngOnInit(): void {
    }

}