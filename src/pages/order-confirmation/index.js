/*
Get inputs from the request.
Input should contain customerId and selected products
Display selected products
*/
var ProductMap = require('../../data/products.json');

function OrderProcessor() {}

OrderProcessor.processInputs = function(req, res) {
	console.log('request params:', req.body);
	var location = req.body.location;
	var products = req.body.product;
	res.render('confirmation');
};

OrderProcessor.sendOutput = function () {

}

OrderProcessor.validateInputs = function() {
	// check if customer id matches selected products, etc.
};

module.exports = OrderProcessor;