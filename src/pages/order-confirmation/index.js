/*
Get inputs.
Input should contain customerId and selected products
Display selected products
*/

"use strict";

function OrderProcessor() {}

OrderProcessor.processInputs = function (/*inputs*/) {
	// save to db, etc
};

OrderProcessor.validateInputs = function (input) {
	// check if customer id matches selected products, etc.
	var location = input.location;
	var products = input.product;
	if (location && products) {
		return true;
	} else {
		return false;
	}
};

module.exports = OrderProcessor;