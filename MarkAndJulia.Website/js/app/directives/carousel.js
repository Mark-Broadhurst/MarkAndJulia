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