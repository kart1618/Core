"use strict";

angular.module("core")
    .directive("addTab", function () {
        return {
            restrict: "E",
            templateUrl: "directives/common/addTab/addTab.html",
            scope: {
                tabName: "@",
                showTab: "="
            },
            controller: ['$scope', '$filter', '$http', '$mdSidenav', function ($scope, $filter, $http, $mdSidenav) {
                $scope.documents = [];
                $scope.isSearching = false;
                $scope.showSearchOptions = false;
                $scope.nytPageResetCounter = 0;
                $scope.guardianPageResetCounter = 0;
                $scope.searchOptions = {
                    page: 1
                };
                $scope.searchText = "";

                console.log($scope.showTab);
                $scope.search = function (userSearchText) {

                    $scope.searchText = userSearchText;
                    if ($scope.tabName === "The New York Times") {
                        $scope.isSearching = true;
                        if ($scope.nytPageResetCounter > 0) {
                            $scope.nytPageResetCounter = 0;
                            $scope.searchOptions.page = 1;
                        }
                        console.log($scope.searchText);
                        $http({
                            method: "GET",
                            url: "http://api.nytimes.com/svc/search/v2/articlesearch.json",
                            params: {
                                "api-key": "b9cea2a4b8aecad8b374d88b275cc59a:10:70162025",
                                "q": $scope.searchText,
                                "page": $scope.searchOptions.page,
                                "hl": true
                            }
                        }).success(function (data) {
                            $scope.documents = data.response.docs;
                            $scope.showSearchOptions = true;
                            $scope.isSearching = false;
                            console.log($scope.documents);

                        }).error(function (error) {
                            console.log(error);
                            $scope.isSearching = false;
                        });
                    } else if ($scope.tabName === "The Guardian") {
                        $scope.isSearching = true;
                        if ($scope.guardianPageResetCounter > 0) {
                            $scope.guardianPageResetCounter = 0;
                            $scope.searchOptions.page = 1;
                        }
                        $http({
                            method: "GET",
                            url: "http://content.guardianapis.com/search",
                            params: {
                                "api-key": "5qxrs3tb5vsaa5yujzuxbdyv",
                                "q": $scope.searchText,
                                "page": $scope.searchOptions.page,
                                "show-fields": "trailText"
                            }
                        }).success(function (data) {
                            $scope.documents = data.response.results;
                            console.log($scope.documents);
                            $scope.showSearchOptions = true;
                            $scope.isSearching = false;
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

                $scope.clearResults = function () {
                    $scope.documents = "";
                    $scope.showSearchOptions = false;
                    if ($scope.tabName === "The New York Times") {
                        $scope.nytPageResetCounter += 1;
                    } else if ($scope.tabName === "The Guardian") {
                        $scope.guardianPageResetCounter += 1;
                    }

                }
            }]
        }
    });