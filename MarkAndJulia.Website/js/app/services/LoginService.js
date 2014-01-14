/*global app */
app.factory('loginService', function ($http, $q) {
    'use strict';
    return {
        processLogin: function (email, password, rememberMe) {
            var deferred = $q.defer();
            if (!email) {
                deferred.reject("Please enter your email address.");
            }
            if (!password) {
                deferred.reject("Please enter your password.");
            }
            if (email && password) {
                return $http({
                    url: '/api/user',
                    method: 'POST',
                    data: {
                        email: email,
                        password: password,
                        rememberMe: rememberMe
                    }
                })
                .success(function (data) {
                    if (data !== null) {
                        deferred.resolve(data);
                    } else {
                        deferred.reject("There was an error with your E-Mail/Password combination. Please try again.");
                    }
                })
                .error(function () {
                    deferred.reject("There was an error contacting the server.");
                });
            }

        }
    };
});