(function () {
    'use strict';
    angular.module("core", ["ui.router", "ngSanitize", "ngMaterial"])
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/login');
            $stateProvider
                .state('root', {
                    abstract: 'true',
                    url: '',
                    templateUrl: 'views/root.html'
                })
                .state('root.login', {
                    url: '/login',
                    templateUrl: 'views/login.html',
                    controller: 'loginController'
                })
                .state('root.home', {
                    url: '/home',
                    templateUrl: 'views/home.html',
                    controller: 'homeController'
                })
                .state('root.profile', {
                    url:'/profile',
                    templateUrl: 'views/profile.html',
                    controller: 'profileController'
                })
        })
})();
