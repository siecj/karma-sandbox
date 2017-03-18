define(['angular'], function() {
    var app = angular.module('myApp', []);

    app.controller('HelloWorldCtrl', HelloWorldCtrl);
    app.service('helloWorldService', helloWorldService);

    function HelloWorldCtrl() {
        var vm = this;
        vm.title = 'helo';
    }
    function helloWorldService() {
        this.hello = function(name) {
            return 'Hello ' + name;
        }
    }
});