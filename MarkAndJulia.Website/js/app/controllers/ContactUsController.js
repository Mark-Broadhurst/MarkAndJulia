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