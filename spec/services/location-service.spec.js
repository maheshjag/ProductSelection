var LocationService = require('../../src/services/location-service');
var locationService;
var req = {
	params: {
		customerId: ''
	}
};
var res = {
	send: function() {}
};
var testId;

describe('The location service', function () {

	beforeEach(function () {
		locationService = new LocationService();
	});

	afterEach(function () {
		locationService = null;
	});

	it('should throw an exception if the customer id is not supplied', function () {
		var callLocationService = function () {
			locationService.getLocationForCustomer(req, res);
		};
		expect(callLocationService).toThrow();
	});

	it('should throw an exception if the customer id is not recognised', function () {
		var callLocationService = function (id) {
			req.params.customerId = id;
			locationService.getLocationForCustomer(req, res);
		};
		expect(function() {
			callLocationService('fake');
		}).toThrow();
	});

	it('should return LONDON if the customer id is "test1"', function() {
		testId = 'test1';
		var callLocationService = function (id) {
			req.params.customerId = id;
			return locationService.getLocationForCustomer(req, res);
		};
		var location = callLocationService(testId);
		expect(location).toEqual('LONDON')
	});

	it('should return LIVERPOOL if the customer id is "test1"', function() {
		testId = 'test2';
		var callLocationService = function (id) {
			req.params.customerId = id;
			return locationService.getLocationForCustomer(req, res);
		};
		var location = callLocationService(testId);
		expect(location).toEqual('LIVERPOOL')
	});

});