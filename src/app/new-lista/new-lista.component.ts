import { Component, OnInit } from '@angular/core';
import { Router, ParamMap } from '@angular/router';
import { PostsService } from '../posts.service';
import { Lista } from '../../../models/frontend/lista';
import { Song } from '../../../models/frontend/song';

@Component({
  selector: 'app-new-lista',
  templateUrl: './new-lista.component.html',
  styleUrls: ['./new-lista.component.css']
})
export class NewListaComponent implements OnInit {
  list: Lista = new Lista();
  canciones: Song[] = [];


  constructor(private postsService: PostsService, private router: Router) { }

  ngOnInit() {
    this.canciones = [
      {
        "id": 0,
        "nombre": "Crazy",
        "song": "../music/MeLlamas.mp3",
        "image": "img/Crazy.jpg",
        "valor": false
      },
      {
        "id": 1,
        "nombre": "Best Day Of My Life",
        "song": "../music/MeLlamas.mp3",
        "image": "img/Best Day Of My Life.jpg",
        "valor": false
      },
      {
        "id": 2,
        "nombre": "Do I Wanna Know",
        "song": "../music/MeLlamas.mp3",
        "image": "img/Do I Wanna Know.png",
        "valor": false
      },
      {
        "id": 3,
        "nombre": "Smooth Criminal",
        "song": "../music/MeLlamas.mp3",
        "image": "img/Nocover.jpg",
        "valor": false
      },
      {
        "id": 4,
        "nombre": "Calimba",
        "song": "../music/MeLlamas.mp3",
        "image": "img/Nocover.jpg",
        "valor": false
      },
      {
        "id": 5,
        "nombre": "Nate Dog",
        "song": "../music/MeLlamas.mp3",
        "image": "img/Nocover.jpg",
        "valor": false
      },
      {
        "id": 6,
        "nombre": "Pimp",
        "song": "../music/MeLlamas.mp3",
        "image": "img/Nocover.jpg",
        "valor": false
      },
      {
        "id": 7,
        "nombre": "In the Club",
        "song": "../music/MeLlamas.mp3",
        "image": "img/Nocover.jpg",
        "valor": false
      },
      {
        "id": 8,
        "nombre": "Smooth Criminal",
        "song": "../music/MeLlamas.mp3",
        "image": "img/Nocover.jpg",
        "valor": false
      },
      {
        "id": 9,
        "nombre": "Hello",
        "song": "../music/MeLlamas.mp3",
        "image": "img/Nocover.jpg",
        "valor": false
      },
      {
        "id": 10,
        "nombre": "Love",
        "song": "../music/MeLlamas.mp3",
        "image": "img/Nocover.jpg",
        "valor": false
      },
      {
        "id": 11,
        "nombre": "Salio el Sol",
        "song": "../music/MeLlamas.mp3",
        "image": "img/Nocover.jpg",
        "valor": false
      },
      {
        "id": 12,
        "nombre": "Ella y yo",
        "song": "../music/MeLlamas.mp3",
        "image": "img/Nocover.jpg",
        "valor": false
      },
      {
        "id": 13,
        "nombre": "El Perdon",
        "song": "../music/MeLlamas.mp3",
        "image": "img/Nocover.jpg",
        "valor": false
      }
    ]
  }

  guardar(lista: Lista): void {
    this.list.canciones = this.canciones.filter(
      cancion => cancion.valor === true);

    this.postsService.create(this.list)
      .then(hero => {
        console.log(hero);
        this.router.navigate(['/lists']);
      });
  }
}
