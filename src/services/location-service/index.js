var LocationService = function () {
	// this is the customer location service
	this.getLocationForCustomer = function (customerId) {
		var customerLocations = require('../../data/customer-locations.json');
		var FAILURE_MESSAGE = 'Failure exception';
		console.log('Customer id:', customerId);
		console.log('Customer locations map:', customerLocations);

		location = customerLocations[customerId];
		console.log('found location:', location, 'for customer');
		if (!customerId || !location) {
			throw Error(FAILURE_MESSAGE);
		}
		return location;
	};
};

module.exports = LocationService;