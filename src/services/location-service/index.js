"use strict";
var LocationService = function () {
	// this is the customer location service
};

LocationService.prototype.getLocationForCustomer = function (customerId) {
	var customerLocations = require('../../data/customer-locations.json');
	var FAILURE_MESSAGE = 'Failure exception';

	var location = customerLocations[customerId];
	if (!customerId || !location) {
		throw Error(FAILURE_MESSAGE);
	}
	return location;
};

module.exports = LocationService;