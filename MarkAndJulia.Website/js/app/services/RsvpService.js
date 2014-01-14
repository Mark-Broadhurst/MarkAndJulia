/*global app */
app.factory('rsvpService', function ($http, $q, $log) {
    'use strict';
    return {
        submit: function (rsvp) {
            var deferred = $q.defer();
            $http.post('/api/rsvp', rsvp)
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