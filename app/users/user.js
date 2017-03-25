System.register([], function(exports_1) {
    var Address, User;
    return {
        setters:[],
        execute: function() {
            Address = (function () {
                function Address() {
                }
                return Address;
            })();
            exports_1("Address", Address);
            User = (function () {
                function User() {
                    this.address = new Address();
                }
                return User;
            })();
            exports_1("User", User);
        }
    }
});
//# sourceMappingURL=user.js.map