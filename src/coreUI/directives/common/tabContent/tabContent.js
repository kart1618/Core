"use strict";

angular.module("core")
    .directive("tabContent", function () {
        return {
            restrict: "E",
            templateUrl: "directives/common/tabContent/tabContent.html",
            scope: true
        }
    });