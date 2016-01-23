/*
Get inputs.
Input should contain customerId and selected products
Display selected products
*/

function OrderProcessor() {}

OrderProcessor.processInputs = function (inputs) {
	// save to db, etc
};

OrderProcessor.validateInputs = function (inputs) {
	// check if customer id matches selected products, etc.
	console.log('request params:', inputs);
	var location = inputs.location;
	var products = inputs.product;
	return true;
};

module.exports = OrderProcessor;