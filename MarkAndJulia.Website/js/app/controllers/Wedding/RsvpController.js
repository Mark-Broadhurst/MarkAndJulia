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