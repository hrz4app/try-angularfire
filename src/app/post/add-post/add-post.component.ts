import { Component, OnInit } from '@angular/core';

import { AngularFireService } from '../../angular-fire.service';
import { Post } from '../post';

@Component({
  selector: 'app-add-post',
  template: `
    <div class="card">
      <div class="card-content">
        <span class="card-title">Add Post</span>
          <div class="row">
          <div class="input-field col s6">
            <input id="title" name="title" type="text" [(ngModel)]="newPost.title" class="validate">
            <label for="title">Title</label>
          </div>
          <div class="input-field col s6">
            <textarea id="body" name="body" class="materialize-textarea validate" [(ngModel)]="newPost.body"></textarea>
            <label for="body">Body</label>
          </div>
          <button (click)="submit()" class="btn">Create</button>
        </div>
      </div>
    </div>
  `
})
export class AddPostComponent implements OnInit {
  private _path = 'posts';
  newPost: Post = {
    title: '',
    body: ''
  };

  constructor(private readonly firestoreService: AngularFireService<Post>) { }

  ngOnInit() {
  }

  submit() {
    if (this.newPost.title !== '' && this.newPost.body !== '') {
      this.firestoreService.add(this._path, {
        title: this.newPost.title,
        body: this.newPost.body,
        created: this.firestoreService.timestamp,
        updated: this.firestoreService.timestamp
      });
    }
    this.newPost.title = '';
    this.newPost.body = '';
  }

}
