var LocationService = function () {
	// this is the customer location service
	this.getLocationForCustomer = function (req, res) {
		var location = '';
		var FAILURE_MESSAGE = 'Failure exception';
		var customerId = req.params.customerId;

		if (!customerId) {
			res.send(FAILURE_MESSAGE);
			throw Error(FAILURE_MESSAGE);
		}
		console.log('Customer id:', customerId);
		switch (customerId) {
			case "test1":
				location = "LONDON";
				break;
			case "test2":
				location = "LIVERPOOL";
				break;
			default:
				throw Error(FAILURE_MESSAGE);
		}
		res.send(location);
		return location;
	};
};

module.exports = LocationService;