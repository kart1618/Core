"use strict";

angular.module("core")
    .factory("tabService", ["$http", function ($http) {
        var tabService = this;
        var nytAPIKey = "b9cea2a4b8aecad8b374d88b275cc59a:10:70162025";
        var guardianAPIKey = "5qxrs3tb5vsaa5yujzuxbdyv";

        tabService.nytArticleSearch = function (searchText, pageNum) {
            var articleSearchEndPoint = "http://api.nytimes.com/svc/search/v2/articlesearch.json?";
            articleSearchEndPoint += "q=" + searchText + "&hl=true&page=" + pageNum + "&api-key=" + nytAPIKey;
            return $http.get(articleSearchEndPoint).then(function(response) {
                return response;
            });
        };

        tabService.guardianArticleSearch = function (searchText, pageNum) {
            var articleSearchEndPoint = "http://content.guardianapis.com/search?";
            articleSearchEndPoint += "api-key=" + guardianAPIKey + "&page=" + pageNum + "&q=" + searchText + "&show-fields=trailText";
            return $http.get(articleSearchEndPoint).then(function(response) {
                return response;
            });
        };

        return tabService;
    }]);