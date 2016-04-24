'use strict';
angular.module('core')
    .controller('tabController', ['$scope', '$rootScope', '$filter', '$http', 'tabService', '$mdSidenav',
        function ($scope, $rootScope, $filter, $http, tabService, $mdSidenav) {
            $scope.documents = [];
            $scope.isSearching = false;
            $scope.showSearchOptions = false;
            $scope.tabStringLiterals = $rootScope.literals.tabs;
            $scope.defaults = {
                "sortOrder": "newest"
            };
            $scope.searchOptions = {
                page: 1
            };

            if ($scope.tabName === "The New York Times") {
                $scope.sortOrder = ["newest", "oldest"];
            }
            else if ($scope.tabName === "The Guardian") {
                $scope.sortOrder = ["None", "newest", "oldest", "relevance"];
            }
            if ($scope.tabName === "You Tube") {
                $scope.sortOrder = ["Date", "rating", "title", "relevance", "videoCount", "viewCount"];
            }
            $scope.selectedSortOrder = $scope.defaults.sortOrder;
            $scope.searchText = "";

            var nytPageResetCounter = 0;
            var guardianPageResetCounter = 0;
            var promise, success, error;

            var searchNewYorkTimes = function() {

                if (nytPageResetCounter > 0) {
                    nytPageResetCounter = 0;
                    $scope.searchOptions.page = 1;
                }

                promise = tabService.nytArticleSearch($scope.searchText, $scope.searchOptions.page, $scope.selectedSortOrder);
                success = function(response) {
                    $scope.documents = response.data.response.docs;
                    $scope.showSearchOptions = true;
                    $scope.isSearching = false;
                };
                error = function(error) {
                    $scope.isSearching = false;
                };
                    promise.then(success, error);
            };

            var searchGaurdian = function () {

                if (guardianPageResetCounter > 0) {
                    guardianPageResetCounter = 0;
                    $scope.searchOptions.page = 1;
                }
                promise = tabService.guardianArticleSearch($scope.searchText, $scope.searchOptions.page, $scope.selectedSortOrder);
                success = function(response) {
                    $scope.documents = response.data.response.results;
                    $scope.showSearchOptions = true;
                    $scope.isSearching = false;
                };
                error = function(error) {
                    $scope.isSearching = false;
                };
                promise.then(success, error);
            };

            var searchYoutube = function () {

                promise = tabService.youtubeSearch($scope.searchText, "video", $scope.selectedSortOrder);
                success = function(response) {
                    $scope.documents = response.data.items;
                    $scope.isSearching = false;
                };
                error = function(error) {
                    $scope.isSearching = false;
                };
                promise.then(success, error);
            };

            $scope.search = function (userSearchText, selectedSortOrder) {
                $scope.searchText = userSearchText;
                $scope.selectedSortOrder = selectedSortOrder;
                $scope.isSearching = true;
                $scope.showSearchOptions = false;
                if ($scope.tabName === "The New York Times") {
                    searchNewYorkTimes();
                }
                else if ($scope.tabName === "The Guardian") {
                    searchGaurdian();
                }
                else if ($scope.tabName === "You Tube") {
                    searchYoutube();
                }
            };

            $mdSidenav('right').open();
            $scope.openRightMenu = function () {
                $scope.documents = "";
                $mdSidenav('right').toggle();
            };
            $scope.openRightMenu();

            $scope.clearResults = function () {
                $scope.documents = "";
                $scope.showSearchOptions = false;
                if ($scope.tabName === "The New York Times") {
                    nytPageResetCounter += 1;
                }
                else if ($scope.tabName === "The Guardian") {
                    guardianPageResetCounter += 1;
                }
            }
}]);