"use strict";

angular.module("core")
    .factory("loginService", ["$http", "apiKeys", function ($http, apiKeys) {
        var loginService = this;
        var userDetails = {};

        loginService.setUserData = function (idToken, userName, emailId, imageUrl) {
            userDetails.tokenId = idToken;
            userDetails.userName = userName;
            userDetails.emailId = emailId;
            userDetails.imageUrl = imageUrl;
        };

        loginService.getUserData = function () {
            return userDetails;
        };

        loginService.resetUserData = function () {
            userDetails = {};
        };
        return loginService;
    }]);
