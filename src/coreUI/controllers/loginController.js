'use strict';

angular.module("core").controller("loginController", ['$scope', '$http', '$mdSidenav', function ($scope, $http, $mdSidenav) {
    console.log("Inside loginController.");

    $scope.options = {
       'onsuccess': function(googleUser) {
         console.log(googleUser);
         console.log(googleUser.getBasicProfile());
           var profile = googleUser.getBasicProfile();
           console.log("ID: " + profile.getId()); // Don't send this directly to your server!
           console.log("Name: " + profile.getName());
           console.log("Image URL: " + profile.getImageUrl());
           console.log("Email: " + profile.getEmail());

           // The ID token you need to pass to your backend:
           var id_token = googleUser.getAuthResponse().id_token;
           console.log("ID Token: " + id_token);
       }
    };

/*    $scope.googleSignOut = function () {
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
          console.log('User signed out.');
        });
    };*/
}]);
