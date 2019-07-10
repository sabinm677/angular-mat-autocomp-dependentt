import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable , Observer } from 'rxjs/Rx';

/**
 * @title Simple autocomplete
 */
@Component({
  selector: 'autocomplete-simple-example',
  templateUrl: 'autocomplete-simple-example.html',
  styleUrls: ['autocomplete-simple-example.css']
})
export class AutocompleteSimpleExample {

  usersControl: FormControl = new FormControl();
  postsControl: FormControl = new FormControl();
  
  users:any[] = [];
  posts:any[] = [];

  constructor(private http : HttpClient){
  }

  ngOnInit(){
    let url = 'https://jsonplaceholder.typicode.com/users/';
    this.http.get(`${url}`).subscribe(users => {
        this.users = [...users];
    });
  }

  getPosts(userId){
    alert(userId);
    let url = 'https://jsonplaceholder.typicode.com/posts?userId='+userId;
    this.http.get(`${url}`).subscribe(posts => {
        this.posts = [...posts];
    });
  }
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */