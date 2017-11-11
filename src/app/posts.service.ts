import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Lista } from '../../models/frontend/lista';

@Injectable()
export class PostsService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  constructor(private http: Http) { }

  // Get all posts from the API
  getAllPosts() {
    return this.http.get('/api/listas')
      .map(res => res.json());
  }

  getAPosts(id) {
    return this.http.get(`/api/listas/${id}`)
      .map(res => res.json());
  }

  deleteApost(id) {
    return this.http
    .delete(`/api/listas/${id}`)
    .toPromise()
    .then(res => res)
    .catch(this.handleError);
  }

  create(lista: Lista): Promise<Lista> {
    let json = {
      "title": lista.title,
      "poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BZTQzNmEwZTMtZGNkNC00YjQ5LThhYzMtZTBhNzUzODI5ZjRjXkEyXkFqcGdeQXVyMjM5NzU3OTM@._V1_SY1000_SX800_AL_.jpg",
      "genre": lista.categoria,
      "summary": lista.summary,
      "songs": lista.canciones
    }
    return this.http
      .post('/api/listas/', JSON.stringify(json), { headers: this.headers })
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

