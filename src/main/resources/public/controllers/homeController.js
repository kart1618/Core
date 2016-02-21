'use strict';

angular.module("core")
    .controller("homeController", ["$scope", "$http", "$state", "$mdSidenav", "loginService", function ($scope, $http, $state, $mdSidenav, loginService) {
        $scope.nytTab = true;
        $scope.guardianTab = true;
        $scope.youtubeTab = true;

        var inititialise = function () {
            gapi.load('auth2', function () {
                gapi.auth2.init();
            });
            $scope.userDetails = loginService.getUserData();
            console.log($scope.userDetails.tokenId);
            if ($scope.userDetails.tokenId === undefined) {
                console.log("IF");
                $state.go("root.login");
            }
            else {
                console.log("ELSE");
            }
        };
        inititialise();

        //$scope.userDetails = loginService.getUserData();
        console.log($scope.userDetails);
        $scope.googleSignOut = function () {
            var auth2 = gapi.auth2.getAuthInstance();
            auth2.signOut().then(function () {
                console.log('User signed out.');
            });
        };
    }]);