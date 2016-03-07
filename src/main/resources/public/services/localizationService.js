'use strict';

angular.module('core')
    .factory('localizationService', ['$http', '$rootScope', function ($http, $rootScope) {
        var localizationService = this;
        var userDetails = {};

        localizationService.loadConfigAndLiterals = function () {
            return $http.get("config.json", {cache: true}).then(function(response) {
                $rootScope.config = response.data;
                return $http.get("locale/i18n/" + $rootScope.config.language + "/literals.json", {cache: true}).then(function(response) {
                    $rootScope.literals = response.data;
                });
            });
        };

        return localizationService;
    }]);