"use strict";

var LocationService = require('../../src/services/location-service');
var locationService;

describe('The location service', function () {

	beforeEach(function () {
		locationService = new LocationService();
	});

	afterEach(function () {
		locationService = null;
	});

	it('should throw an exception if the customer id is not supplied', function () {
		var callLocationService = function () {
			locationService.getLocationForCustomer();
		};
		expect(callLocationService).toThrow();
	});

	it('should throw an exception if the customer id is not recognised', function () {
		var callLocationService = function (id) {
			locationService.getLocationForCustomer(id);
		};
		expect(function() {
			callLocationService('fake');
		}).toThrow();
	});

	it('should return LONDON if the customer id is "test1"', function() {
		var testId = 'test1';
		var callLocationService = function (id) {
			return locationService.getLocationForCustomer(id);
		};
		var location = callLocationService(testId);
		expect(location).toEqual('LONDON');
	});

	it('should return LIVERPOOL if the customer id is "test1"', function() {
		var testId = 'test2';
		var callLocationService = function (id) {
			return locationService.getLocationForCustomer(id);
		};
		var location = callLocationService(testId);
		expect(location).toEqual('LIVERPOOL');
	});

});