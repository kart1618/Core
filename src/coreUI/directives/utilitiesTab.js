"use strict";
angular.module("core")
    .directive("utilitiesTab", function () {
        return {
            restrict: "E",
            templateUrl: "directives/UtilitiesTab.html",
            scope: {
                tabName: "@"
            },
            controller: ['$scope', function ($scope) {
                $scope.user = {
                    frequency: "Daily"
                };

                $scope.frequencies = ("Daily Weekly Monthly").split(" ").map(function(frequency) {
                        return {key: frequency};
                });
            }]
        }
    });