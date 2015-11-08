"use strict";
angular.module("core")
    .directive("showResults", function () {
        return {
            restrict: "E",
            templateUrl: "directives/common/showResults/showResults.html",
            scope: {
                tabName: "@",
                resultArr: "="
            },
            controller: ['$scope', function ($scope) {
                $scope.displayResults = [false, false];
                 if ($scope.tabName === "The New York Times") {
                    $scope.displayResults[0] = true;
                 }
                 else if ($scope.tabName === "The Guardian") {
                    $scope.displayResults[1] = true;
                 }
            }]
        }
    });