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
    return this.http.get('/api/tvshows')
      .map(res => res.json());
  }

  getAPosts(id) {
    return this.http.get(`/api/tvshows/${id}`)
      .map(res => res.json());
  }

  create(lista: Lista): Promise<Lista> {
    let json = {
      "id": 1,
      "title": lista.title,
      "year": 2010,
      "country": "USA",
      "poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BZTQzNmEwZTMtZGNkNC00YjQ5LThhYzMtZTBhNzUzODI5ZjRjXkEyXkFqcGdeQXVyMjM5NzU3OTM@._V1_SY1000_SX800_AL_.jpg",
      "seasons": 2,
      "genre": lista.categoria,
      "summary": lista.summary
    }
    return this.http
      .post('/api/tvshows/', JSON.stringify(lista), { headers: this.headers })
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

