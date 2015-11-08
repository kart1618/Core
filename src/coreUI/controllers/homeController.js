'use strict';

angular.module("core")
    .controller("homeController", ['$scope', '$http', '$mdSidenav', function ($scope, $http, $mdSidenav) {
        $scope.nytTab = true;
        $scope.guardianTab = true;
    }]);