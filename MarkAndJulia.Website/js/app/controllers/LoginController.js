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