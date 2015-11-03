(function () {
    'use strict';
    angular.module("core", ["ui.router", "ngSanitize", "ngMaterial"])
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/home');
            $stateProvider
                .state('root', {
                    abstract: 'true',
                    url: '',
                    templateUrl: 'views/root.html'
                })
                .state('root.home', {
                    url: '/home',
                    templateUrl: 'views/home.html',
                    controller: 'homeController'
                });
        })
})();
