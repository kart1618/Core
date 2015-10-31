'use strict';

angular.module("core")
    .controller("homeController", ['$scope', '$http', '$mdSidenav', function ($scope, $http, $mdSidenav) {
        $scope.documents = [];
        $scope.isSearching = false;
        $scope.search = function () {
            $scope.isSearching = true;
            $http({
                method: "GET",
                url: "http://api.nytimes.com/svc/search/v2/articlesearch.json",
                params: {
                    "api-key": "b9cea2a4b8aecad8b374d88b275cc59a:10:70162025",
                    "q": $scope.searchTerm,
                    "page": 1
                }
            }).success(function (data) {
                $scope.documents = data.response.docs;
                console.log($scope.documents[0].web_url);
                console.log($scope.documents[0].snippet);
                $scope.isSearching = false;

            }).error(function (error) {
                console.log(error);
                $scope.isSearching = false;
            });
            console.log($scope.searchTerm);
        };
        $mdSidenav('left').open();
        $scope.openLeftMenu = function () {
            $mdSidenav('left').toggle();
            console.log("HELLO");
        };
        $scope.openLeftMenu();
    }]);