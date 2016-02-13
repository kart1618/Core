    "use strict";

angular.module("core")
    .factory("coreService", ["$http", "apiKeys", function ($http, apiKeys) {
        var coreService = this;

        coreService.nytArticleSearch = function () {
            var articleSearchEndPoint = "/env";
            console.log(articleSearchEndPoint);
            return $http.get(articleSearchEndPoint).then(function(response) {
                return response;
            });
        };

        return coreService;
    }]);