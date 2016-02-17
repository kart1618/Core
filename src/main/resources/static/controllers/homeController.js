'use strict';

angular.module("core")
    .controller("homeController", ["$scope", "$http", "$mdSidenav", "loginService", function ($scope, $http, $mdSidenav, loginService) {
        $scope.nytTab = true;
        $scope.guardianTab = true;
        $scope.youtubeTab = true;

        var inititialise = function () {
            gapi.load('auth2', function () {
                gapi.auth2.init();
            });
        };
        inititialise();

        $scope.userDetails = loginService.getUserData();

        $scope.googleSignOut = function () {
            var auth2 = gapi.auth2.getAuthInstance();
            auth2.signOut().then(function () {
                console.log('User signed out.');
            });
        };
    }]);