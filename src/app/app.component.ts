import { Component } from '@angular/core';

import {PostService} from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PostService]
})
export class AppComponent {
  name : string;
  email : string;
  website : string;
  hobbies : string[];
  showHobbies : boolean;
  posts: IPost[];
  
  constructor (private postService:PostService)
  {
    this.name = "Miguel (DarthMK)";
    this.email = 'miki.mejias85@gmail.com';
    this.website = 'http://www.darthmk.io';
    this.hobbies = ['See movies :)', 'Animes', 'Pc games'];
    this.showHobbies= false;
    this.postService.getPosts().subscribe(posts=>{
      this.posts = posts;
    });
  }

  toggleHobbies()
  {
    this.showHobbies = !this.showHobbies;
  }

  newHobby(hobby)
  {
    this.hobbies.push(hobby.value);
    hobby.value = '';
    return false;
  }
}

interface IPost
{
  id: string;
  title: string;
  body: string;
}