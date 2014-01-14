///#source 1 1 /js/app/app.js
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
///#source 1 1 /js/app/controllers/Wedding/AccommodationController.js
/*global app */
app.controller('accommodation', function () {
    'use strict';
});

///#source 1 1 /js/app/controllers/Wedding/DateController.js
/*global app */
app.controller('date', function () {
    'use strict';
});
///#source 1 1 /js/app/controllers/Wedding/DirectionsController.js
/*global app */
app.controller('directions', function () {
    'use strict';
});
///#source 1 1 /js/app/controllers/Wedding/GiftListController.js
/*global app */
app.controller('gift-list', function () {
    'use strict';
});
///#source 1 1 /js/app/controllers/Wedding/OrderOfTheDayController.js
/*global app */
app.controller('order-of-the-day', function ($scope, $route) {
    'use strict';
    $scope.currentEvent = null;
    $scope.listOfEvents = $route.current.locals.events;
    $scope.showHint = function () {
        $scope.currentEvent = this.event;
    };
    $scope.hideHint = function () {
        $scope.currentEvent = null;
    };
});
///#source 1 1 /js/app/controllers/Wedding/RsvpController.js
/*global app */
app.controller('rsvp', function ($scope, $document, rsvpService) {
    'use strict';
    $scope.attendance = [
        { 'value': true, 'label': 'Yes, I/We are able to attend' },
        { 'value': false, 'label': 'No, I/We are not able to attend' }
    ];
    $scope.rooms = [
        { 'value': 1, 'label': 'Single (£89)' },
        { 'value': 2, 'label': 'Double (£89)' },
        { 'value': 3, 'label': 'Twin (£89)' },
        { 'value': 4, 'label': 'Junior Suite (£185)' },
        { 'value': 0, 'label': 'Room not required' }
    ];
    $scope.submit = function () {
        rsvpService
            .submit({
                'canAttend': $scope.canAttend.value,
                'guestnames': $scope.guestnames,
                'telephone': $scope.telephone,
                'email': $scope.email,
                'dietaryRequirements': $scope.dietaryRequirements,
                'roomRequired': $scope.roomRequired.value,
                'cotRequired': $scope.cotRequired
            })
            .then(function () {
                $($document).find("#rsvpContent").fadeOut(function () {
                    if ($scope.canAttend.value) {
                        $($document).find("#thanks").fadeIn();

                    } else {
                        $($document).find("#sorry").fadeIn();
                    }
                });
            });
    };
});
///#source 1 1 /js/app/controllers/Wedding/VenueController.js
/*global app */
app.controller('venue', function () {
    'use strict';
});
///#source 1 1 /js/app/controllers/ContactUsController.js
/*global app */
app.controller('contact-us', function ($scope, $document, contactUsService) {
    'use strict';
    $scope.submit = function () {
        contactUsService
            .submit({
                'name': $scope.name,
                'telephone': $scope.telephone,
                'email': $scope.email,
                'question': $scope.question
            })
            .then(function () {
                $($document).find("#formContent").fadeOut(function () {
                    $($document).find("#thanks").fadeIn();
                });
            });
    };
});
///#source 1 1 /js/app/controllers/HomeController.js
/*global app */
app.controller('home', function () {
    'use strict';
});

///#source 1 1 /js/app/controllers/LoginController.js
/*global app, localStorage */
app.controller('login', function ($scope, loginService) {
    'use strict';
    $scope.errors = [];
    $scope.login = function () {
        $scope.errors.length = 0;
        loginService.processLogin($scope.email, $scope.password, $scope.rememberMe)
            .then(function (data) {
                localStorage.setItem("User", JSON.stringify(data));
                $('#Login').modal('hide');
            }, function (error) {
                $scope.errors.push(error);
            });
    };
});
///#source 1 1 /js/app/controllers/PhotoController.js
/*global app */
app.controller('photo', function () {
    'use strict';
});
///#source 1 1 /js/app/services/LoginService.js
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
///#source 1 1 /js/app/services/ContactUsService.js
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
///#source 1 1 /js/app/services/OrderOfTheDayService.js
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
///#source 1 1 /js/app/services/RsvpService.js
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
///#source 1 1 /js/app/directives/carousel.js
/*global app */
app.directive('carousel', function () {
    'use strict';
    return {
        restrict: 'C',
        link: function (scope, element) {
            element.carousel();
        }
    };
});
