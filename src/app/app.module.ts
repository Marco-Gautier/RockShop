import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { 
  MatInputModule,
  MatCardModule, 
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
} from '@angular/material/';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { PosteCreateComponent } from './blog/posts/post-create/post-create.component';
import { HeaderComponent } from './blog/header/header.component';
import { PostsListComponent } from './blog/posts/posts-list/posts-list.component';
import { PostsService } from './blog/posts/posts.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    PosteCreateComponent,
    HeaderComponent,
    PostsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
