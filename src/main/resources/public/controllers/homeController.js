'use strict';

angular.module('core')
    .controller('homeController', ['$scope', '$rootScope', '$http', '$state', '$mdSidenav', 'loginService',
        function ($scope, $rootScope, $http, $state, $mdSidenav, loginService) {
            $scope.nytTab = true;
            $scope.guardianTab = true;
            $scope.youtubeTab = true;

            gapi.load('auth2', function () {
                    gapi.auth2.init();
            });

            $scope.userDetails = loginService.getUserData();
            if ($scope.userDetails.tokenId === undefined) {
                $state.go('root.login');
            }

            $scope.homeStringLiterals = $rootScope.literals.home;

            $scope.editProfile = function () {
                $state.go('root.profile');
            };

            $scope.googleSignOut = function () {
                var auth2 = gapi.auth2.getAuthInstance();
                auth2.signOut().then(function () {
                loginService.resetUserData();
                $state.go('root.login');
            });
        };
    }]);