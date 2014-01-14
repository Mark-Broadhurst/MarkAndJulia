/*global angular, $ */
var app = angular.module('MarkAndJulia', []);
app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    'use strict';
    $routeProvider
        .when('/', {
            templateUrl: '/partials/home.html',
            controller: 'home'
        })
        .when('/wedding', {
            templateUrl: '/partials/wedding.html',
            controller: 'wedding'
        })
        .when('/wedding/date', {
            templateUrl: '/partials/date.html',
            controller: 'date'
        })
        .when('/wedding/venue', {
            templateUrl: '/partials/venue.html',
            controller: 'venue'
        })
        .when('/wedding/order-of-the-day', {
            templateUrl: '/partials/orderofday.html',
            controller: 'order-of-the-day',
            resolve: {
                events: function ($q, orderOfTheDayService) {
                    var defered = $q.defer();
                    orderOfTheDayService.getEvents()
                        .then(function(events) {
                            defered.resolve(events);
                        });
                    return defered.promise;
                    
                }
            }
        })
        .when('/wedding/accommodation', {
            templateUrl: '/partials/accommodation.html',
            controller: 'accommodation'
        })
        .when('/wedding/directions', {
            templateUrl: '/partials/directions.html',
            controller: 'directions'
        })
        .when('/wedding/gift-list', {
            templateUrl: '/partials/giftlist.html',
            controller: 'gift-list'
        })
        .when('/wedding/rsvp', {
            templateUrl: '/partials/rsvp.html',
            controller: 'rsvp'
        })
        .when('/photo-gallery', {
            templateUrl: '/partials/photo.html',
            controller: 'photo'
        })
        .when('/contact-us', {
            templateUrl: '/partials/contact-us.html',
            controller: 'contact-us'
        })
        .otherwise({ redirectTo: '/' });
    $locationProvider.html5Mode(true);
}]);