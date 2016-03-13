'use strict';
angular.module('core')
    .directive('utilitiesTab', ['coreService', function (coreService) {
        return {
            restrict: 'E',
            templateUrl: 'views/utilitiesTab.html',
            scope: {
                tabName: '@'
            },
            controller: 'utilitiesController'
        }
    }]);