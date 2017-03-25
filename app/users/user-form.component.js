System.register(['angular2/core', 'angular2/common', './basicValidators'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, basicValidators_1;
    var UserFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (basicValidators_1_1) {
                basicValidators_1 = basicValidators_1_1;
            }],
        execute: function() {
            UserFormComponent = (function () {
                function UserFormComponent(fb) {
                    this.form = fb.group({
                        name: ['', common_1.Validators.required],
                        email: ['', basicValidators_1.BasicValidators.email],
                        phone: [],
                        address: fb.group({
                            street: [],
                            suite: [],
                            city: [],
                            zipcode: []
                        })
                    });
                }
                UserFormComponent.prototype.routerCanDeactivate = function (next, previous) {
                    if (this.form.dirty)
                        return confirm("You have unsaved chnages. Are you sure you want to navigate away?");
                    return true;
                };
                UserFormComponent = __decorate([
                    core_1.Component({
                        selector: 'user-from',
                        templateUrl: 'app/users/user-form.component.html',
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], UserFormComponent);
                return UserFormComponent;
            })();
            exports_1("UserFormComponent", UserFormComponent);
        }
    }
});
//# sourceMappingURL=user-form.component.js.map