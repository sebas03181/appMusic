import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import 'rxjs/add/operator/switchMap';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Location }                 from '@angular/common';
import { Lista } from '../../../models/frontend/lista';
import { Song } from '../../../models/frontend/song';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list: Lista = new Lista();
  song : Song = new Song();
  canciones: Song[]= [];
  constructor(private postsService: PostsService,private route: ActivatedRoute,
  private location: Location) { }
  public audio = new Audio();
  ngOnInit() {
    let id: string = '';
    this.route.params.forEach((param: Params) => {
      id = param['id'];
    });

   this.route.paramMap
    .switchMap((params: ParamMap) => this.postsService.getAPosts(id))
    .subscribe(list => {
      this.list = list;
      this.canciones = list.songs;
    });

    //var audio = new Audio();
    this.audio.src = "../music/EllaYYo.mp3";
    this.audio.load();
    this.audio.play();
  }
  play(){
    return this.audio.src;
  }

}
