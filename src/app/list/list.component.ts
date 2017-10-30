import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import 'rxjs/add/operator/switchMap';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
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
    let id: string = '';
    this.route.params.forEach((param: Params) => {
      id = param['id'];
    });

   this.route.paramMap
    .switchMap((params: ParamMap) => this.postsService.getAPosts(id))
    .subscribe(list => {this.list = list;
    });
  }

}
