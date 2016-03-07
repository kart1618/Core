'use strict';

angular.module('core')
    .controller('loginController', ['$scope', '$http', '$state', '$mdSidenav', 'loginService', 'localizationService', function ($scope, $http, $state, $mdSidenav, loginService, localizationService) {

    $scope.options = {
        'onsuccess': function (googleUser) {
            var profile = googleUser.getBasicProfile();
            console.log("ID: " + profile.getId()); // Don't send this directly to your server!
            console.log("Name: " + profile.getName());
            console.log("Image URL: " + profile.getImageUrl());
            console.log("Email: " + profile.getEmail());

            // The ID token you need to pass to your backend:
            var id_token = googleUser.getAuthResponse().id_token;
            loginService.setUserData(id_token, profile.getName(), profile.getEmail(), profile.getImageUrl());
            var promise = localizationService.loadConfigAndLiterals();
            var success = function(response) {
                $state.go('root.home');
            };
            var error = function(error) {
                console.log("Error loading configuration and string literals: " + error);
            };
            promise.then(success, error);
        }
    };
}]);