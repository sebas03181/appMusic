import { PostsService } from './posts.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ListsComponent } from './lists/lists.component';
// Imports commented out for brevity
import { RouterModule } from '@angular/router';
import { NewListaComponent } from './new-lista/new-lista.component';



// Define the routes
const ROUTES = [
  {
    path: '',
    redirectTo: 'lists',
    pathMatch: 'full'
  },
  { path: 'lists', component: ListsComponent },
  { path: 'list/:id', component: ListComponent },
  { path: 'new', component: NewListaComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ListsComponent,
    NewListaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES) // Add routes to the app
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }