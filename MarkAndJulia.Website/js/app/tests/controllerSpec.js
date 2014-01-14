/*global describe, it, expect, beforeEach, module, inject */
/// <reference path="../../ng/angular.js" />
/// <reference path="../../ng/angular-mocks.js" />
/// <reference path="../../ng/angular-scenario.js" />

describe('MarkAndJulia.Controllers', function () {
	'use strict';

	beforeEach(module('MarkAndJulia.Controllers'));
	describe('login controller', function () {
		it('should create a model with no errors', function () {
			inject(function ($rootScope, $controller) {
				var scope = $rootScope.$new(),
					ctrl = $controller('login', { $scope: scope });
				expect(scope.errors.length).toBe(0);
				expect(ctrl).toBe(ctrl);
			});
		});
	});
});