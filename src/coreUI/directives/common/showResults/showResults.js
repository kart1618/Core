"use strict";
angular.module("core")
    .directive("showResults", ["tabService", function () {
        return {
            restrict: "E",
            templateUrl: "directives/common/showResults/showResults.html",
            scope: {
                tabName: "@",
                resultArr: "="
            },
            controller: ["$scope", "tabService", function ($scope, tabService) {

                $scope.displayResults = [false, false];
                $scope.url = "";
                var promise, success, error;

                var initialise = function () {
                     if ($scope.tabName === "The New York Times") {
                        $scope.displayResults[0] = true;
                     }
                     else if ($scope.tabName === "The Guardian") {
                        $scope.displayResults[1] = true;
                     }
                };
                initialise();

                $scope.analyzeSentiment = function (url) {
                    $scope.url = url;
                    promise = tabService.hodSentimentAnalysis($scope.url);
                    success = function(response) {
                        console.log(response.data.aggregate);
                    };
                    error = function(error) {
                        console.log(error);
                    };
                    promise.then(success, error);
                };
            }]
        }
    }]);