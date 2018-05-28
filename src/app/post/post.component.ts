import { Component, OnInit } from '@angular/core';

import { AngularFireService } from './../angular-fire.service';
import { Post } from './post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  private _path = 'posts';
  allPosts: Post[];
  singlePost: Post;

  constructor(private fService: AngularFireService<Post>) { }

  ngOnInit() {
    this.allPosts = this.fService.get(this._path);
  }

  read(post: Post) {
    this.singlePost = this.fService.get(this._path, post.id);
  }

  update(post: Post) {
    this.singlePost = null;
    this.fService.update(this._path, post.id, {
      title: post.title,
      body: post.body,
      updated: this.fService.timestamp
    });
  }

  delete(post: Post) {
    this.singlePost = null;
    this.fService.delete(this._path, post.id);
  }

}
