'use strict';

angular.module('core')
    .factory('tabService', ['$http', 'apiKeys', function ($http, apiKeys) {
        var tabService = this;

        tabService.nytArticleSearch = function (searchText, pageNum, sortOrder) {
            var articleSearchEndPoint = "http://api.nytimes.com/svc/search/v2/articlesearch.json?";
            articleSearchEndPoint += "&q=" + searchText + "&sort=" + sortOrder + "&hl=true&page=" + pageNum + "&api-key=" + apiKeys["nyt"];
            return $http.get(articleSearchEndPoint).then(function(response) {
                return response;
            });
        };

        tabService.guardianArticleSearch = function (searchText, pageNum, sortOrder) {
            var articleSearchEndPoint = "http://content.guardianapis.com/search?";
            articleSearchEndPoint += "api-key=" + apiKeys["guardian"] + "&page=" + pageNum + "&q=" + searchText + "&order-by=" + sortOrder + "&show-fields=trailText";
            return $http.get(articleSearchEndPoint).then(function(response) {
                return response;
            });
        };

        tabService.youtubeSearch = function (searchText, type, sortOrder) {
            var videoSearchEndPoint = "https://www.googleapis.com/youtube/v3/search?part=snippet";
            videoSearchEndPoint += "&maxResults=10" + "&order=" + sortOrder + "&q=" + searchText + "&type=" + type + "&key=" + apiKeys["googleBrowserKey"];
            console.log(videoSearchEndPoint);
            return $http.get(videoSearchEndPoint).then(function(response) {
                    return response;
            });
        };
        tabService.hodSentimentAnalysis = function (url) {
            var sentimentAnalysisEndpoint = "https://api.havenondemand.com/1/api/sync/analyzesentiment/v1?";
            sentimentAnalysisEndpoint += "url=" + url + "&apikey=" + apiKeys["hod"];
            return $http.get(sentimentAnalysisEndpoint).then(function(response) {
                return response;
            });
        };

        return tabService;
    }]);