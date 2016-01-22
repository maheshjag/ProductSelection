var CatalogueService = require('../../src/services/catalogue-service');
var catalogueService;
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
	});

	it('should return Sky News and Sky Sports News always', function () {
		var result = catalogueService.getProductsForLocation();
		expect(result['NEWS']).toBeDefined();
		assertDefaultProducts(result['NEWS']);
		expect(result['NEWS'].length).toEqual(2);
	});

	it('should return correct products for LONDON', function () {
		var locationId = 'LONDON';
		var result = catalogueService.getProductsForLocation(locationId);
		expect(result[locationId]).toContain('Arsenal TV');
		expect(result[locationId]).toContain('Chelsea TV');
		expect(result[locationId].length).toEqual(2);
		assertDefaultProducts(result['NEWS']);
	});

	it('should return correct products for LIVERPOOL', function () {
		var locationId = 'LIVERPOOL';
		var result = catalogueService.getProductsForLocation(locationId);
		expect(result[locationId]).toContain('Liverpool TV');
		expect(result[locationId].length).toEqual(1);
		assertDefaultProducts(result['NEWS']);
	});
});