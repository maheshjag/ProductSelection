define([
	'public/scripts/cart-helper'
], function (CartHelper) {
	"use strict";

	describe('Cart helper', function () {
		it('should add an item to the supplied basket', function () {
			var item = {'test': 1234};
			var basket = {};
			basket = CartHelper.addToBasket(basket, item);
			expect(Object.keys(basket).length).toEqual(1);
		});

		it('should remove an item to the basket', function () {
			var itemKey = 'test';
			var basket = {'test': 1234};
			basket = CartHelper.removeFromBasket(basket, itemKey);
			expect(Object.keys(basket).length).toEqual(0);
		});

		describe('should report an empty basket correctly:', function () {
			it('isBasketEmpty should return true for an empty basket', function () {
				var basket = {};
				expect(CartHelper.isBasketEmpty(basket)).toEqual(true);
			});
		});
	});
});
