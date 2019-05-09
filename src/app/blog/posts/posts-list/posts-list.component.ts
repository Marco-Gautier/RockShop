import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
  posts = [
    {title: "title", content: "content"},
    {title: "title", content: "content"},
    {title: "title", content: "content"}
  ];
  constructor() { }

  ngOnInit() {
  }

}
