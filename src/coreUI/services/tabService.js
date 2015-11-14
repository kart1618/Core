"use strict";
angular.module("core")
    .factory("tabService", ["$http", function ($http) {
        var tabService = this;
        var nytAPIKey = "b9cea2a4b8aecad8b374d88b275cc59a:10:70162025";
        tabService.nytArticleSearch = function (searchText, pageNum) {

            var articleSearchEndPoint = "http://api.nytimes.com/svc/search/v2/articlesearch.json";
        }
    }]);