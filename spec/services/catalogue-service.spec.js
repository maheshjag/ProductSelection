var CatalogueService = require('../../src/services/catalogue-service');
var catalogueService;
var req = {
	params: {
		locationId: ''
	}
};
var res = {
	send: function() {}
};
var DEFAULT_PRODUCTS = ['Sky News', 'Sky Sports News'];

function assertDefaultProducts (result) {
	expect(result).toContain(DEFAULT_PRODUCTS[0]);
	expect(result).toContain(DEFAULT_PRODUCTS[1]);
}

describe('The Catalogue Service', function () {
	beforeEach(function () {
		catalogueService = new CatalogueService();
	});

	afterEach(function () {
		catalogueService = null;
		req.params.locationId = '';
	});

	it('should return Sky News and Sky Sports News always', function () {
		var result = catalogueService.getProductsForLocation(req, res);
		assertDefaultProducts(result);
		expect(result.length).toEqual(2);
	});

	it('should return correct products for LONDON', function () {
		req.params.locationId = 'LONDON';
		var result = catalogueService.getProductsForLocation(req, res);
		expect(result).toContain('Arsenal TV');
		expect(result).toContain('Chelsea TV');
		assertDefaultProducts(result);
		expect(result.length).toEqual(4);
	});

	it('should return correct products for LIVERPOOL', function () {
		req.params.locationId = 'LIVERPOOL';
		var result = catalogueService.getProductsForLocation(req, res);
		expect(result).toContain('Liverpool TV');
		assertDefaultProducts(result);
		expect(result.length).toEqual(3);
	});
});