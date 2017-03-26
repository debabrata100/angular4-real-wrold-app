System.register(['angular2/core', './post.service', '../spinner.component', '../users/users.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, post_service_1, spinner_component_1, users_service_1;
    var PostsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (post_service_1_1) {
                post_service_1 = post_service_1_1;
            },
            function (spinner_component_1_1) {
                spinner_component_1 = spinner_component_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            }],
        execute: function() {
            PostsComponent = (function () {
                function PostsComponent(_postService, _userService) {
                    this._postService = _postService;
                    this._userService = _userService;
                    this.users = [];
                }
                ;
                PostsComponent.prototype.ngOnInit = function () {
                    this.loadUsers();
                    this.loadPosts();
                };
                PostsComponent.prototype.reloadPosts = function (filter) {
                    this.loadPosts(filter);
                };
                PostsComponent.prototype.loadPosts = function (filter) {
                    var _this = this;
                    this.postsLoading = true;
                    this._postService.getPosts(filter)
                        .subscribe(function (posts) { return _this.posts = posts; }, null, function () { _this.postsLoading = false; });
                };
                PostsComponent.prototype.loadUsers = function () {
                    var _this = this;
                    this._userService.getUsers()
                        .subscribe(function (users) { return _this.users = users; });
                };
                PostsComponent.prototype.select = function (post) {
                    var _this = this;
                    this.commentsLoading = true;
                    this.currentPost = post;
                    this._postService.getComments(post.id)
                        .subscribe(function (comments) { return _this.currentPost.commnets = comments; }, null, function () { return _this.commentsLoading = false; });
                };
                PostsComponent = __decorate([
                    core_1.Component({
                        selector: 'posts',
                        templateUrl: 'app/posts/posts.component.html',
                        styles: ["\n +        .posts li { cursor: default; }\n +        .posts li:hover { background: #ecf0f1; } \n +        .list-group-item.active, \n +        .list-group-item.active:hover, \n +        .list-group-item.active:focus { \n +            background-color: #ecf0f1;\n +            border-color: #ecf0f1; \n +            color: #2c3e50;\n +        }\n +    "],
                        directives: [spinner_component_1.SpinnerComponent],
                        providers: [post_service_1.PostService, users_service_1.UsersService]
                    }), 
                    __metadata('design:paramtypes', [post_service_1.PostService, users_service_1.UsersService])
                ], PostsComponent);
                return PostsComponent;
            })();
            exports_1("PostsComponent", PostsComponent);
        }
    }
});
//# sourceMappingURL=posts.component.js.map