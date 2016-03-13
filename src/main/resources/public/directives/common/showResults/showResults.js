'use strict';
angular.module('core')
    .directive('showResults', ['tabService', function () {
        return {
            restrict: 'E',
            templateUrl: 'views/showResults.html',
            scope: {
                tabName: '@',
                resultArr: '='
            },
            controller: 'resultsController'
        }
    }])
;