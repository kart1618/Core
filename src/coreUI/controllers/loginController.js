'use strict';

angular.module("core").controller("loginController", ['$scope', '$http', '$mdSidenav', function ($scope, $http, $mdSidenav) {
    console.log("Inside loginController.");

    $scope.options = {
       'onsuccess': function(response) {
         console.log(response);
       }
    };
/*    $scope.onSignIn = function (googleUser) {
        console.log("Inside onSignIn.");
        console.log(googleUser);
    };*/
}]);
