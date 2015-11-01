"use strict";

angular.module("core")
    .directive("tabContent", function () {
        return {
            restrict: "E",
            templateUrl: "directives/common/tabContent/addTab.html",
            scope: true
        }
    });