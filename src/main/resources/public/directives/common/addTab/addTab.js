'use strict';

angular.module('core')
    .directive('addTab', ['tabService', function (tabService) {
        return {
            restrict: 'E',
            templateUrl: 'views/addTab.html',
            scope: {
                tabName: '@',
                showTab: '='
            },
            controller: 'tabController'
        }
    }]);