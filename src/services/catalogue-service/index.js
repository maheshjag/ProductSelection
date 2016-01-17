var CatalogueService = function () {
	// this is the product catalogue service
	var DEFAULT_PRODUCTS = ['Sky News', 'Sky Sports News'];
	this.getProductsForLocation = function (req, res) {
		var products = [];
		var locationId = req.params.locationId;

		switch (locationId) {
			case "LONDON":
				products.push('Arsenal TV', 'Chelsea TV');
				break;
			case "LIVERPOOL":
				products.push('Liverpool TV');
				break;
		}
		products = products.concat(DEFAULT_PRODUCTS);
		res.send(products);
		return products;
	};
};

module.exports = CatalogueService;