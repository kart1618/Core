"use strict";

angular.module("core")
    .factory("tabService", ["$http", function ($http) {
        var tabService = this;
        var nytAPIKey = "b9cea2a4b8aecad8b374d88b275cc59a:10:70162025";
        var guardianAPIKey = "5qxrs3tb5vsaa5yujzuxbdyv";
        var hodAPIKey = "f3ced2e2-20f4-4ca8-8379-1072752ff45b";

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

        tabService.hodSentimentAnalysis = function (url) {
            var sentimentAnalysisEndpoint = "https://api.havenondemand.com/1/api/sync/analyzesentiment/v1?";
            sentimentAnalysisEndpoint += "url=" + url + "&apikey=" + hodAPIKey;
            console.log(sentimentAnalysisEndpoint);
            return $http.get(sentimentAnalysisEndpoint).then(function(response) {
                return response;
            });
        };

        return tabService;
    }]);