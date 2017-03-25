import {Component,OnInit} from 'angular2/core';
import {PostService} from './post.service';
import {SpinnerComponent} from '../spinner.component';



@Component({
    selector:'posts',
    templateUrl:'app/posts/posts.component.html',
    directives:[SpinnerComponent],
    providers:[PostService]
})
export class PostsComponent implements OnInit{
    posts: any[];
    isLoading = true;

    constructor(private _postService:PostService){}

    ngOnInit(){
         this._postService.getPosts()
         .subscribe(posts=> this.posts = posts,
         null,
         ()=>{this.isLoading = false}
         );
    }
}