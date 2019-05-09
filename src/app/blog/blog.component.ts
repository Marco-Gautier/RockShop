import { Component, OnInit } from '@angular/core';

import { Post } from './posts/post.model' 

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  ngOnInit() {
  }
}
