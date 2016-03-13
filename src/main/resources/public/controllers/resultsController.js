'use strict';
angular.module('core')
    .controller('resultsController', ['$scope', '$rootScope', 'tabService',
        function ($scope, $rootScope, tabService) {
            $scope.displayResults = [false, false, false];
            $scope.url = "";
            $scope.resultsStringLiterals = $rootScope.literals.results;
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
                    document.sentimentVerdict = response.data.aggregate.sentiment;
                };
                error = function (error) {
                    console.log(error);
                };
                promise.then(success, error);
            };
    }]);