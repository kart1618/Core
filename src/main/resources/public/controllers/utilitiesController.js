'use strict';
angular.module('core')
    .controller('utilitiesController', ['$scope','coreService', function ($scope, coreService) {
                $scope.user = {
                    nytFrequency: 'Daily',
                    guardianFrequency: 'Daily'
                };

                $scope.frequencies = ('Daily Weekly Monthly').split(' ').map(function(frequency) {
                        return {key: frequency};
                });

                var promise = coreService.nytArticleSearch();
                var success = function(response) {
                    $scope.test = response;
                };
                var error = function(error) {
                    console.log(error);
                };
                promise.then(success, error);
            }]);