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

                $scope.displayResults = [false, false, false];
                $scope.url = "";
                $scope.sentimentVerdict;
                angular.forEach($scope.resultArr, function(value, key) {

                });
                var promise, success, error;
                if ($scope.tabName === "The New York Times") {
                    $scope.displayResults[0] = true;
                }
                else if ($scope.tabName === "The Guardian") {
                    $scope.displayResults[1] = true;
                }
                else if ($scope.tabName === "You Tube") {
                    $scope.url = "https://www.youtube.com/watch?v=";
                    $scope.displayResults[2] = true;
                }

                $scope.getYouTubeUrl = function (id) {
                    $scope.url = "https://www.youtube.com/watch?v=" + id;
                    return $scope.url;
                };

                $scope.analyzeSentiment = function (url, document) {
                    $scope.url = url;
                    promise = tabService.hodSentimentAnalysis($scope.url);
                    success = function (response) {
                        console.log(response.data.aggregate);
                        document.sentimentVerdict = response.data.aggregate.sentiment;
                    };
                    error = function (error) {
                        console.log(error);
                    };
                    promise.then(success, error);
                };
            }]
        }
    }])
;