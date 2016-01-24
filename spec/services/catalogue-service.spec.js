"use strict";

var CatalogueService = require('../../src/services/catalogue-service');
var ProductMap = require('../../src/data/products.json');

var DEFAULT_PRODUCTS_KEY = 'ALL';
var DEFAULT_PRODUCTS = ProductMap[DEFAULT_PRODUCTS_KEY];

function assertDefaultProducts (products) {
	Object.keys(DEFAULT_PRODUCTS).forEach(function (productId) {
		expect(DEFAULT_PRODUCTS[productId]).toEqual(products[productId]);
	});
}

describe('The Catalogue Service', function () {

	var catalogueService = new CatalogueService();

	it('should return Sky News and Sky Sports News always', function () {
		var products = catalogueService.getProductsForLocation();
		expect(products[DEFAULT_PRODUCTS_KEY]).toBeDefined();
		assertDefaultProducts(products[DEFAULT_PRODUCTS_KEY]);
		expect(Object.keys(products[DEFAULT_PRODUCTS_KEY]).length).toEqual(2);
	});

	it('should return correct products for LONDON', function () {
		var locationId = 'LONDON';
		var result = catalogueService.getProductsForLocation(locationId);
		var products = Object.keys(result[locationId]).map(function (id) {
			return result[locationId][id];
		});
		expect(products).toContain('Arsenal TV');
		expect(products).toContain('Chelsea TV');
		expect(products.length).toEqual(2);
		assertDefaultProducts(result[DEFAULT_PRODUCTS_KEY]);
	});

	it('should return correct products for LIVERPOOL', function () {
		var locationId = 'LIVERPOOL';
		var result = catalogueService.getProductsForLocation(locationId);
		var products = Object.keys(result[locationId]).map(function (id) {
			return result[locationId][id];
		});
		expect(products).toContain('Liverpool TV');
		expect(products.length).toEqual(1);
		assertDefaultProducts(result[DEFAULT_PRODUCTS_KEY]);
	});

});