"use strict";

angular.module("core")
    .directive("addTab", function () {
        return {
            restrict: "E",
            templateUrl: "directives/common/addTab/addTab.html",
            scope: {
                tabName: "@"
            },
            controller: ['$scope', '$filter', '$http', '$mdSidenav', function ($scope, $filter, $http, $mdSidenav) {
                $scope.documents = [];
                $scope.isSearching = false;
                $scope.dateTimeToday = new Date();
                var nytimesMaxDate = new Date("January 01, 1851 00:00:00");
                $scope.searchOptions = {
                    show: false,
                    page: 1,
                    maxDate: new Date(
                                nytimesMaxDate.getFullYear(),
                                nytimesMaxDate.getMonth(),
                                nytimesMaxDate.getDate())
                };

                 $scope.minDate = new Date(
                      $scope.dateTimeToday.getFullYear(),
                      $scope.dateTimeToday.getMonth(),
                      $scope.dateTimeToday.getDate());
                 $scope.maxDate = new Date(
                      nytimesMaxDate.getFullYear(),
                      nytimesMaxDate.getMonth(),
                      nytimesMaxDate.getDate());
                 $scope.date = $filter("date")($scope.date, "yyyyMMdd");
                 console.log($scope.date);
                 console.log($scope.minDate);
                 console.log($scope.maxDate);
                $scope.search = function () {
                    console.log($scope.searchOptions.page);
                    $scope.isSearching = true;
                    $http({
                        method: "GET",
                        url: "http://api.nytimes.com/svc/search/v2/articlesearch.json",
                        params: {
                            "api-key": "b9cea2a4b8aecad8b374d88b275cc59a:10:70162025",
                            "q": $scope.searchTerm,
                            "page": $scope.searchOptions.page
                        }
                    }).success(function (data) {
                        $scope.documents = data.response.docs;
                        $scope.searchOptions.show = true;
                        $scope.isSearching = false;
//                        console.log($scope.documents[0].web_url);
//                        console.log($scope.documents[0].snippet);
                          console.log(data.response.meta.hits);

                    }).error(function (error) {
                        console.log(error);
                        $scope.isSearching = false;
                    });
                    console.log($scope.searchTerm + $scope.tabName);
                };
                $mdSidenav('right').open();
                $scope.openRightMenu = function () {
                    $mdSidenav('right').toggle();
                    console.log("HELLO");
                };
                $scope.openRightMenu();
            }]
    }
});