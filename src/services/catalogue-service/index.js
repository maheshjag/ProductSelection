var CatalogueService = function () {
	// this is the product catalogue service
	var DEFAULT = 'default';
	this.getProductsForLocation = function (locationId) {
		var products = {};
		var productMap = require('../../data/products.json');

		if (locationId) {
			products[locationId] = productMap[locationId];
		}
		products['NEWS'] = productMap[DEFAULT];
		return products;
	};
};

module.exports = CatalogueService;