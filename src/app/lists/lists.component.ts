import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Lista } from '../../../models/frontend/lista';
import { Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  // instantiate posts to an empty array

  title = 'Listas de Reproducción';
  lists: Lista[] = [];

  constructor(private postsService: PostsService,private router: Router) { }

  ngOnInit() {
    // Retrieve posts from the API
    this.postsService.getAllPosts ().subscribe(lists => {
      this.lists = lists;
    });
  }

  newLista(){
     this.router.navigate(['/new']);
  }
  navigate(lista){
    this.router.navigateByUrl(`list/${lista._id}`);
  }
  eliminar(lista){
    this.postsService.deleteApost (lista._id).then(result => {
      console.log(result);
      window.location.reload();
    });
  }


}