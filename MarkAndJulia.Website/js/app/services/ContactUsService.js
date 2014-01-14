/*global app */
app.factory('contactUsService', function ($http, $q, $log) {
    'use strict';
    return {
        submit: function (contact) {
            var deferred = $q.defer();
            $http
                .post(
                    'api/contact',
                    contact
                )
                .success(function (data) {
                    deferred.resolve(data);
                })
                .error(function (data, status) {
                    $log.error(status);
                    deferred.reject(status);
                });
            return deferred.promise;
        }
    };
});