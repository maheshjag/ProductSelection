"use strict";

var OrderConfirmation = require('../../src/pages/order-confirmation');

describe('Order confirmation page', function () {
	it('should return false if input contains only location', function () {
		var result = OrderConfirmation.validateInputs({location: 'test1'});
		expect(result).toBeDefined();
		expect(result).toEqual(false);
	});
	it('should return false if input contains only products', function () {
		var result = OrderConfirmation.validateInputs({product: ['test1']});
		expect(result).toBeDefined();
		expect(result).toEqual(false);
	});
	it('should return true only if input contains both location and products', function () {
		var result = OrderConfirmation.validateInputs({location: 'test1', product: []});
		expect(result).toBeDefined();
		expect(result).toEqual(true);
	});
});