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