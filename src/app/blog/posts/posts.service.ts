import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs';

import { Post } from './post.model';
import { environment } from '../../../environments/environment';

@Injectable({providedIn: 'root'})
export class PostsService {
    private posts: Post[] = [];
    private postsUpdated = new Subject<Post[]>();

    constructor(private http: HttpClient) {}

    getPosts() {
        this.http.get<{msg: string, posts: Post[]}>(environment.apiUrl + '/api/post').subscribe((postData) => {
            this.posts = postData.posts;
            this.postsUpdated.next([...this.posts]);
        });
    }

    getPostsUpdateListener() {
        return this.postsUpdated.asObservable();
    }

    addPost(post: Post) {
        this.http.post(environment.apiUrl + '/api/post', post).subscribe((res) => {
            this.posts.push(post);
            this.postsUpdated.next([...this.posts]);
        });
    }
}