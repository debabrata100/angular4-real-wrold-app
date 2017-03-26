import {Component,OnInit} from 'angular2/core';
import {PostService} from './post.service';
import {SpinnerComponent} from '../spinner.component';
import {UsersService} from '../users/users.service';



@Component({
    selector:'posts',
    templateUrl:'app/posts/posts.component.html',
    styles: [`
 +        .posts li { cursor: default; }
 +        .posts li:hover { background: #ecf0f1; } 
 +        .list-group-item.active, 
 +        .list-group-item.active:hover, 
 +        .list-group-item.active:focus { 
 +            background-color: #ecf0f1;
 +            border-color: #ecf0f1; 
 +            color: #2c3e50;
 +        }
 +    `],
    directives:[SpinnerComponent],
    providers:[PostService,UsersService]
})
export class PostsComponent implements OnInit{
    posts: any[];
    postsLoading;
    users = [];
    commentsLoading;;
    currentPost;
    

    constructor(
        private _postService:PostService,
        private _userService: UsersService
        ){}

    ngOnInit(){
        this.loadUsers();
        this.loadPosts();
    }
    reloadPosts(filter){
        this.loadPosts(filter);
    }

    private loadPosts(filter?){
        this.postsLoading = true;
         this._postService.getPosts(filter)
         .subscribe(posts=> this.posts = posts,
         null,
         ()=>{this.postsLoading = false}
         );
    }
    private loadUsers(){
        this._userService.getUsers()
         .subscribe(users=>this.users = users);
    }

    select(post){
        this.commentsLoading=true;
        this.currentPost = post;
        this._postService.getComments(post.id)
        .subscribe(comments=>this.currentPost.commnets = comments,
        null,
        ()=>this.commentsLoading=false
        );
    }
    
}