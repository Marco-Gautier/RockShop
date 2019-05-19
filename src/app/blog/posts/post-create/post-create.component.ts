import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Post } from '../post.model'
import { PostsService } from '../posts.service';


@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.scss']
})
export class PosteCreateComponent {

    constructor(public postsService: PostsService) {}

    onAddPost(form: NgForm) {
        if (form.valid) {
            const post: Post = {
                title: form.value.title,
                image_url: '',
                body: form.value.content,
                creation_date: new Date(Date.now())
            };
            this.postsService.addPost(post);
            form.resetForm();
        }
    }
}