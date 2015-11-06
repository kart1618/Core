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
                $scope.searchOptions = {
                    show: false,
                    page: 1
                };
                console.log($scope.tabName);
                $scope.search = function () {

                    if ($scope.tabName === "The New York Times") {
                        console.log("Here");
                        $scope.isSearching = true;

                        $http({
                            method: "GET",
                            url: "http://api.nytimes.com/svc/search/v2/articlesearch.json",
                            params: {
                                "api-key": "b9cea2a4b8aecad8b374d88b275cc59a:10:70162025",
                                "q": $scope.searchTerm,
                                "page": $scope.searchOptions.page,
                                "hl": true
                            }
                        }).success(function (data) {
                            $scope.documents = data.response.docs;
                            $scope.searchOptions.show = true;
                            $scope.isSearching = false;
                            //                        console.log($scope.documents[0].web_url);
                            //                        console.log($scope.documents[0].snippet);
                            console.log($scope.documents);

                        }).error(function (error) {
                            console.log(error);
                            $scope.isSearching = false;
                        });
                        console.log($scope.searchTerm + $scope.tabName);
                    } else if ($scope.tabName === "The Guardian") {
                        //////
                        $scope.isSearching = true;
                        $http({
                            method: "GET",
                            url: "http://content.guardianapis.com/search",
                            params: {
                                "api-key": "5qxrs3tb5vsaa5yujzuxbdyv",
                                "q": $scope.searchTerm,
                                "page": $scope.searchOptions.page,
                                "show-fields": "trailText"
                            }
                        }).success(function (data) {
                            $scope.documents = data.response.results;
                            console.log($scope.documents);
                            $scope.searchOptions.show = true;
                            $scope.isSearching = false;
                            //                        console.log($scope.documents[0].web_url);
                            //                        console.log($scope.documents[0].snippet);
                            console.log(data.response.pageSize);

                        }).error(function (error) {
                            console.log(error);
                            $scope.isSearching = false;
                        });
                        console.log($scope.searchTerm + " " + $scope.tabName);
                        //////
                    }
                };
                $mdSidenav('right').open();
                $scope.openRightMenu = function () {
                    $scope.documents = "";
                    console.log("Documents cleared!");
                    $mdSidenav('right').toggle();
                    console.log("HELLO");
                };
                $scope.openRightMenu();
            }]
        }
    });