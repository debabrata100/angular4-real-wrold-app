System.register([], function(exports_1) {
    var BasicValidators;
    return {
        setters:[],
        execute: function() {
            BasicValidators = (function () {
                function BasicValidators() {
                }
                BasicValidators.email = function (control) {
                    var regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    return regEx.test(control.value) ? null : { email: true };
                };
                return BasicValidators;
            })();
            exports_1("BasicValidators", BasicValidators);
        }
    }
});
//# sourceMappingURL=basicValidators.js.map