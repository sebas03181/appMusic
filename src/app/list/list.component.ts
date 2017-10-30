import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import 'rxjs/add/operator/switchMap';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Lista } from '../../../models/frontend/lista';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list: Lista = new Lista();

  constructor(private postsService: PostsService,private route: ActivatedRoute,
  private location: Location) { }

  ngOnInit() {

   this.route.paramMap
    .switchMap((params: ParamMap) => this.postsService.getAPosts('59f4e89f7d12511ab4659e79'))
    .subscribe(list => {this.list = list

      // var audio = new Audio();
      // audio.src = "./music/Cosculluela - La Boda.mp3";
      // audio.load();
      // audio.play();
    });
  }

}
