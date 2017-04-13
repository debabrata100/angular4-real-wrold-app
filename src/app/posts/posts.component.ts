import {Component,OnInit} from '@angular/core';
import {PostService} from './post.service';
import {SpinnerComponent} from '../shared/spinner.component';
import {PaginationComponent} from '../shared/pagination.component';

import {UsersService} from '../users/users.service';


@Component({
    templateUrl:'./posts.component.html',
    styleUrls:['posts.style.css']
})
export class PostsComponent implements OnInit{
    posts = [];
    pagedPost = [];
    postsLoading;
    users = [];
    commentsLoading;;
    currentPost;
    pageSize = 10;

    constructor(
    private _postService:PostService,
    private _userService: UsersService
    ){}

    ngOnInit(){
        this.loadUsers();
        this.loadPosts('',this.pageSize);
    }

    changePage($event){
        console.log($event);
        this.loadPostsInPage($event.page*this.pageSize);
    }

    reloadPosts(filter){
        this.loadPosts(filter,this.pageSize);
    }

    private loadPostsInPage(page){
        this.currentPost = "";
        var newArr = [];
        var d = page/this.pageSize;
        var start =  d==0?0:(d-1)*this.pageSize;
        var i=0;
        for(start;start < page ; start++,i++){
            newArr[i] = this.posts[start];
        }
        this.pagedPost = newArr;
    }	

    private loadPosts(filter?,page?){
        var postArr = [];
        this.currentPost = "";
        this.postsLoading = true;
         this._postService.getPosts(filter)
         .subscribe(posts=> {
             this.posts = posts;
             this.loadPostsInPage(page);
         },
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