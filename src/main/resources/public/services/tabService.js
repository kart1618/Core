"use strict";

angular.module("core")
    .factory("tabService", ["$http", "apiKeys", function ($http, apiKeys) {
        var tabService = this;

        tabService.nytArticleSearch = function (searchText, pageNum) {
            var articleSearchEndPoint = "http://api.nytimes.com/svc/search/v2/articlesearch.json?";
            articleSearchEndPoint += "q=" + searchText + "&hl=true&page=" + pageNum + "&api-key=" + apiKeys["nyt"];
            return $http.get(articleSearchEndPoint).then(function(response) {
                return response;
            });
        };

        tabService.guardianArticleSearch = function (searchText, pageNum) {
            var articleSearchEndPoint = "http://content.guardianapis.com/search?";
            articleSearchEndPoint += "api-key=" + apiKeys["guardian"] + "&page=" + pageNum + "&q=" + searchText + "&show-fields=trailText";
            return $http.get(articleSearchEndPoint).then(function(response) {
                return response;
            });
        };

        tabService.youtubeSearch = function (searchText, type) {
            var videoSearchEndPoint = "https://www.googleapis.com/youtube/v3/search?part=snippet";
            videoSearchEndPoint += "&maxResults=10" + "&order=relevance" + "&q=" + searchText + "&type=" + type + "&key=" + apiKeys["googleBrowserKey"];
            return $http.get(videoSearchEndPoint).then(function(response) {
                    return response;
            });
        };
        tabService.hodSentimentAnalysis = function (url) {
            var sentimentAnalysisEndpoint = "https://api.havenondemand.com/1/api/sync/analyzesentiment/v1?";
            sentimentAnalysisEndpoint += "url=" + url + "&apikey=" + apiKeys["hod"];
            console.log(sentimentAnalysisEndpoint);
            return $http.get(sentimentAnalysisEndpoint).then(function(response) {
                return response;
            });
        };

        return tabService;
    }]);