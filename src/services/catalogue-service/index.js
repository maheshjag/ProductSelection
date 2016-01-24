"use strict";

var CatalogueService = function () {
	// this is the product catalogue service
};

var DEFAULT = 'ALL';
CatalogueService.prototype.getProductsForLocation = function (locationId) {
	var products = {};
	var ProductMap = require('../../data/products.json');

	if (locationId) {
		products[locationId] = ProductMap[locationId];
	}
	products[DEFAULT] = ProductMap[DEFAULT];
	return products;
};

module.exports = CatalogueService;