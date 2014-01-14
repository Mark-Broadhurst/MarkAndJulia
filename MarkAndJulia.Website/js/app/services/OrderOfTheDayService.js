/*jslint nomen: true */
/*global app, _ */
app.factory('orderOfTheDayService', function ($http, $q, $log) {
    'use strict';
    return {
        getEvents: function () {
            var deferred = $q.defer();
            $http.get('/api/orderoftheday')
                .success(function (data) {
                    var events = {};
                    events.saturday = _.filter(data, function (orderOfTheDay) {
                        return orderOfTheDay.Day === 20;
                    });
                    events.sunday = _.filter(data, function (orderOfTheDay) {
                        return orderOfTheDay.Day === 21;
                    });
                    deferred.resolve(events);
                })
                .error(function (data, status) {
                    $log.error(status);
                    deferred.reject(status);
                });
            return deferred.promise;
        }
    };
});