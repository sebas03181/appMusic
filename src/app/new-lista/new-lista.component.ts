import { Component, OnInit } from '@angular/core';
import { Router, ParamMap } from '@angular/router';
import { PostsService } from '../posts.service';
import { Lista } from '../../../models/frontend/lista';

@Component({
  selector: 'app-new-lista',
  templateUrl: './new-lista.component.html',
  styleUrls: ['./new-lista.component.css']
})
export class NewListaComponent implements OnInit {
  list: Lista = new Lista();

  constructor(private postsService: PostsService, private router: Router) { }

  ngOnInit() {
  }

  guardar(lista:Lista): void {
      this.postsService.create(this.list)
      .then(hero => {
      console.log(hero);
      this.router.navigate(['/lists']);
    });
  }
}
